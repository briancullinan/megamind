import { Injectable } from '@angular/core';
import * as Fuse from 'fuse.js';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { RpcService } from '../rpc/rpc-service';

@Injectable()
export class SearchService {
    permissionsFiltered: Observable<Array<string>>;
    permissionsAccessible: Observable<Array<string>>;
    permissionsLocked: Observable<Array<string>>;
    permissionsFunctions: Observable<Array<string>>;

    private fuse: Fuse;
    private searchObservable = new ReplaySubject<Array<string>>(1);

    constructor(public rpc: RpcService) {
        this.rpc.permissions.subscribe(perm => {
            this.setupSearch(perm);
        });
        this.setupFilters();
    }

    initial: string;

    // TODO: use notebook exported Core functions instead of this truncated service for the auto-complete
    public search(query: string): Observable<Array<string>> {
        if (typeof query === 'undefined' || query.trim().length === 0) {
            this.searchObservable.next([]);
            return this.searchObservable;
        }
        if (!this.fuse) {
            this.initial = query;
            return this.searchObservable;
        }
        console.log('searching ' + query);
        const result = this.fuse.search<string>(query);
        this.searchObservable.next(result);
        return this.searchObservable;
    }

    private setupSearch(permissions: { [index: string]: any }): void {
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
        const database = Object.keys(permissions).map(k => ({
            id: k,
            question: k.split(/[\[\]]/ig)[ 1 ],
            permissions: permissions[ k ]
        }));
        this.fuse = new Fuse(database, FUSE_CONFIG);
        if (this.initial) {
            const result = this.fuse.search<string>(this.initial);
            this.searchObservable.next(result);
        }
    }

    private setupFilters(): void {
        this.permissionsFiltered = this.searchObservable
            .map((arr: Array<string>) => {
                console.log('found ' + arr);
                return arr
                    .map(r => r.split(/[\[\]]/ig)[ 1 ]);
            });

        this.permissionsAccessible = Observable.combineLatest(
            this.searchObservable,
            this.rpc.permissions,
            (arr, permissions) => arr
                .filter(r => typeof permissions[ r ] !== 'undefined'
                    && permissions[ r ].indexOf('Public') > -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsLocked = Observable.combineLatest(
            this.searchObservable,
            this.rpc.permissions,
            (arr, permissions) => arr
                .filter(r => typeof permissions[ r ] !== 'undefined'
                    && permissions[ r ].indexOf('Public') === -1
                    && permissions[ r ].indexOf('Function') === -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsFunctions = Observable.combineLatest(
            this.searchObservable,
            this.rpc.permissions,
            (arr, permissions) => arr
                .filter(r => typeof permissions[ r ] !== 'undefined'
                    && permissions[ r ].indexOf('Public') === -1
                    && permissions[ r ].indexOf('Function') > -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));
    }

}
