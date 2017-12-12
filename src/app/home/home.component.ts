import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Fuse from 'fuse.js';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/zip';
import { environment } from '../../environments/environment';

@Component({
    selector: 'bc-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit, OnDestroy {
    search = 'tell joke';
    history: Array<Array<any>> = [];
    loading = false;
    functionName = '';
    functionParameters: Array<string> = [];
    parameters: { [index: string]: any } = {};

    permissions: { [index: string]: any } = {};
    permissionsFiltered: Observable<Array<string>>;
    permissionsAccessible: Observable<Array<string>>;
    permissionsLocked: Observable<Array<string>>;
    permissionsFunctions: Observable<Array<string>>;

    myControl = new FormControl();
    private fuse: Fuse;
    private searchObservable: Observable<Array<string>>;
    private error: boolean;

    constructor(public http: HttpClient,
                public ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.getParameters();
        this.getPermissions();
    }

    ngOnDestroy(): void {
    }

    getPermissions() {
        this.http.get(environment.rpcAddress + '/getPermissions')
            .subscribe((r: { [index: string]: any }) => {
                this.permissions = r;
                this.filterPermissions();
            }, e => {
            });
    }

    filterPermissions() {
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
        this.searchObservable = this.myControl.valueChanges
            .startWith(this.search)
            .map(name => {
                this.search = name;
                return name && name.length > 0
                    ? this.fuse.search<string>(name)
                    : Object.keys(this.permissions);
            });

        this.permissionsFiltered = this.searchObservable
            .map((arr: Array<string>) => arr
                .map(r => r.split(/[\[\]]/ig)[ 1 ]));

        this.permissionsAccessible = this.searchObservable
            .map((arr: Array<string>) => arr
                .filter(r => this.permissions[ r ].indexOf('Public') > -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsLocked = this.searchObservable
            .map((arr: Array<string>) => arr
                .filter(r => this.permissions[ r ].indexOf('Public') === -1
                    && this.permissions[ r ].indexOf('Function') === -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsFunctions = this.searchObservable
            .map((arr: Array<string>) => arr
                .filter(r => this.permissions[ r ].indexOf('Public') === -1
                    && this.permissions[ r ].indexOf('Function') > -1)
                .map(r => r.split(/[\[\]]/ig)[ 1 ])
                .slice(0, 10));

        this.permissionsFiltered
            .debounceTime(500)
            .subscribe(r => this.getParameters());
        this.ref.detectChanges();
    }

    getParameters() {
        if (typeof this.fuse === 'undefined') {
            return;
        }
        const search = this.fuse.search<string>(this.search);
        console.log(search);
        if (search.length === 0 || typeof this.permissions[ search[ 0 ] ] === 'undefined'
            || this.permissions[ search[ 0 ] ].indexOf('Function') === -1) {
            this.error = true;
            this.ref.detectChanges();
            return;
        }
        this.error = false;
        this.loading = true;
        const keep = this.functionParameters.map(p => this.parameters[ p ]);
        this.functionName = '';
        this.functionParameters = [];
        this.parameters = {};
        if (this.history.length > 5) {
            this.history.splice(5);
        }
        this.http.get(environment.rpcAddress + '/getParameterNames?search=' + this.search)
            .subscribe((r: Array<string>) => {
                this.loading = false;
                this.functionName = r[ 0 ];
                this.functionParameters = r.slice(1);
                this.parameters = this.functionParameters.reduce((acc, p, i) => {
                    acc[ p ] = keep[ i ];
                    return acc;
                }, {} as { [index: string]: any });
                this.ref.detectChanges();
            }, e => {
                this.loading = false;
                this.functionName = '';
                this.functionParameters = [];
                this.parameters = {};
                this.history.unshift([ e, JSON.stringify(e, null, 4) ]);
                this.ref.detectChanges();
            });
        this.ref.detectChanges();
    }

    sendCommand() {
        this.loading = true;
        if (typeof this.functionName === 'undefined'
            || this.functionName === '') {
            return false;
        } else {
            // TODO: call import with the search terms if it is not a function
        }

        this.history.unshift([ 'megamind', this.search, JSON.stringify(this.parameters, null, 4) ]);
        if (this.history.length > 5) {
            this.history.splice(5);
        }

        console.log(environment.rpcAddress + '/' + this.functionName);
        this.http.post(
            environment.rpcAddress + '/' + this.functionName,
            this.parameters)
            .subscribe(r => {
                this.loading = false;
                this.history.unshift([ r, JSON.stringify(r, null, 4) ]);
                this.ref.detectChanges();
            }, e => {
                this.loading = false;
                this.history.unshift([ e, JSON.stringify(e, null, 4) ]);
                this.ref.detectChanges();
            });
        this.ref.detectChanges();
        return false;
    }
}
