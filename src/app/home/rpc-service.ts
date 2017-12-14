import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Fuse from 'fuse.js';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../environments/environment';

@Injectable()
export class RpcService {
    lastResult: any;
    permissionsSub: Subscription;
    searchSub: Subscription;

    permissionsFiltered: Observable<Array<string>>;
    permissionsAccessible: Observable<Array<string>>;
    permissionsLocked: Observable<Array<string>>;
    permissionsFunctions: Observable<Array<string>>;

    private fuse: Fuse;
    private inputSearch = new BehaviorSubject<string>('');
    private searchObservable: Observable<Array<string>>;
    private permissionsObservable = new ReplaySubject<{ [index: string]: any }>(1);

    constructor(public http: HttpClient) {
        this.setupPermissions();
        this.setupFilters();
    }

    public call(search: string, body: { [index: string]: any } = {}, isPost = false): Observable<object> {
        const query: { [index: string]: string } = Object.keys(body).reduce((acc, k) => {
            if (typeof body[ k ] !== 'undefined') {
                acc[ k ] = body[ k ];
            }
            return acc;
        }, {} as { [index: string]: string });
        return isPost
            ? this.http.post(environment.rpcAddress + '/rpc?function=' + search, query)
            : this.http.get(environment.rpcAddress + '/rpc?function=' + search, {params: query});
    }

    public search(query: string): void {
        this.inputSearch.next(query);
    }

    public parameters(search: string): Observable<Array<string>> {
        return this.permissionsObservable
            .flatMap(permissions => {
                const results = this.fuse.search<string>(search);
                if (results.length === 0 || typeof permissions[ results[ 0 ] ] === 'undefined'
                    || permissions[ results[ 0 ] ].indexOf('Function') === -1) {
                    return Observable.of([]);
                }
                return this.call('get parameter names', {search});
            })
            .map((r: Array<string>) => {
                return r;
            });
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
    }

    private setupPermissions(): void {
        this.permissionsSub = this.call('get permissions')
            .subscribe((permissions: { [index: string]: any }) => {
                this.setupSearch(permissions);
                this.permissionsObservable.next(permissions);
            });
    }

    private setupFilters(): void {
        this.searchObservable = Observable
            .combineLatest(
                this.inputSearch,
                this.permissionsObservable,
                (name: string, permissions: { [index: string]: any }) => ({name, permissions}))
            .map(({name, permissions}) => {
                console.log('searching ' + name);
                return name && name.length > 0
                    ? this.fuse.search<string>(name)
                    : Object.keys(permissions);
            });

        this.permissionsFiltered = this.searchObservable
            .map((arr: Array<string>) => arr
                .map(r => r.split(/[\[\]]/ig)[ 1 ]));

        this.permissionsAccessible = Observable
            .combineLatest(
                this.searchObservable,
                this.permissionsObservable,
                (arr: Array<string>, permissions) => ({arr, permissions}))
            .map(({arr, permissions}) => arr
                .filter(r => permissions[ r ].indexOf('Public') > -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsLocked = Observable
            .combineLatest(
                this.searchObservable,
                this.permissionsObservable,
                (arr: Array<string>, permissions) => ({arr, permissions}))
            .map(({arr, permissions}) => arr
                .filter(r => permissions[ r ].indexOf('Public') === -1
                    && permissions[ r ].indexOf('Function') === -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsFunctions = Observable
            .combineLatest(
                this.searchObservable,
                this.permissionsObservable,
                (arr: Array<string>, permissions) => ({arr, permissions}))
            .map(({arr, permissions}) => arr
                .filter(r => permissions[ r ].indexOf('Public') === -1
                    && permissions[ r ].indexOf('Function') > -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));
    }

}
