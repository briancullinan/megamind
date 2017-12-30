import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Fuse from 'fuse.js';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../environments/environment';
import { HistoryService } from '../history/history-service';

@Injectable()
export class SearchService {
    permissionsFiltered: Observable<Array<string>>;
    permissionsAccessible: Observable<Array<string>>;
    permissionsLocked: Observable<Array<string>>;
    permissionsFunctions: Observable<Array<string>>;
    parameters = new ReplaySubject<Array<string>>(1);

    private permissions: { [index: string]: any } = {};
    private fuse: Fuse;
    private searchObservable = new ReplaySubject<Array<string>>(1);
    private functionName: string;
    private parameterSub: Subscription;

    constructor(public http: HttpClient,
                public history: HistoryService) {
        this.setupFilters();
        this.setupPermissions();
        this.setupSearch();
    }

    public call(search: string, body: { [index: string]: any } = {}, isPost = false): Observable<object> {
        const query: { [index: string]: string } = Object.keys(body).reduce((acc, k) => {
            if (typeof body[ k ] !== 'undefined') {
                acc[ k ] = body[ k ];
            }
            return acc;
        }, {} as { [index: string]: string });
        this.history.event([ 'megamind', search, JSON.stringify(body, void 0, 4) ]);
        return (isPost
            ? this.http.post(environment.rpcAddress + '/rpc?function=' + search, query)
            : this.http.get(environment.rpcAddress + '/rpc', {
                params: Object.assign({'function': search}, query)
            }))
            .map(r => {
                this.history.event([ r, JSON.stringify(r, void 0, 4) ]);
                return r;
            });
    }

    initial: string;

    public search(search: string): void {
        if (typeof search === 'undefined' || search.trim().length === 0) {
            return;
        }
        this.initial = search;
        console.log('searching ' + search);
        const result = this.fuse.search<string>(search);
        this.searchObservable.next(result);
    }

    private functionParameters(search: string) {
        if (typeof search === 'undefined' || search.trim().length === 0) {
            return;
        }
        const results = this.fuse.search<string>(search);
        if (results.length === 0 || typeof this.permissions[ results[ 0 ] ] === 'undefined'
            || this.permissions[ results[ 0 ] ].indexOf('Function') === -1) {
            this.parameters.next([]);
            return;
        }
        if (results[ 0 ] === this.functionName) {
            return;
        }
        console.log('parameters ' + results[ 0 ]);
        this.functionName = results[ 0 ];
        this.call('get parameter names', {search})
            .subscribe(r => {
                const params = [ search ].concat((r as Array<string>).slice(1));
                return this.parameters.next(params);
            });
    }

    private setupSearch(): void {
        const FUSE_CONFIG = {
            caseSensitive: false,
            findAllMatches: true,
            distance: 100,
            threshold: 0.5,
            tokenize: false,
            shouldSort: true,
            keys: [ 'question' ],
            id: 'id'
        };
        const database = Object.keys(this.permissions).map(k => ({
            id: k,
            question: k.split(/[\[\]]/ig)[ 1 ],
            permissions: this.permissions[ k ]
        }));
        this.fuse = new Fuse(database, FUSE_CONFIG);
        if (this.initial) {
            this.searchObservable.next(this.fuse.search<string>(this.initial));
        }
    }

    private setupPermissions(): void {
        this.call('get permissions')
            .subscribe((permissions: { [index: string]: any }) => {
                Object.assign(this.permissions, permissions);
                this.setupSearch();
            });
    }

    private setupFilters(): void {
        this.permissionsFiltered = this.searchObservable
            .map((arr: Array<string>) => arr
                .map(r => r.split(/[\[\]]/ig)[ 1 ]));

        this.parameterSub = this.permissionsFiltered
            .subscribe(s => this.functionParameters(s[ 0 ]));

        this.permissionsAccessible = this.searchObservable
            .map((arr) => arr
                .filter(r => typeof this.permissions[ r ] !== 'undefined'
                    && this.permissions[ r ].indexOf('Public') > -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsLocked = this.searchObservable
            .map((arr) => arr
                .filter(r => typeof this.permissions[ r ] !== 'undefined'
                    && this.permissions[ r ].indexOf('Public') === -1
                    && this.permissions[ r ].indexOf('Function') === -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsFunctions = this.searchObservable
            .map((arr) => arr
                .filter(r => typeof this.permissions[ r ] !== 'undefined'
                    && this.permissions[ r ].indexOf('Public') === -1
                    && this.permissions[ r ].indexOf('Function') > -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));
    }

}
