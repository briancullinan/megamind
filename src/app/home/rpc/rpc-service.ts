import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../../environments/environment';
import { HistoryService } from '../history/history-service';

@Injectable()
export class RpcService {
    parameters = new ReplaySubject<Array<string>>(1);
    permissions = new ReplaySubject<{ [index: string]: any }>(1);

    private functionName: string;

    constructor(public http: HttpClient,
                public history: HistoryService) {
        this.setupPermissions();
    }

    public call(search: string, body: { [index: string]: any } = {}, isPost = false): Observable<object> {
        const query: { [index: string]: string } = Object.keys(body).reduce((acc, k) => {
            if (typeof body[ k ] !== 'undefined') {
                acc[ k ] = body[ k ];
            }
            return acc;
        }, {} as { [index: string]: string });
        this.history.event([ 'megamind', search, JSON.stringify(body) ]);
        return (isPost
            ? this.http.post(environment.rpcAddress + '/rpc?function=' + search, query)
            : this.http.get(environment.rpcAddress + '/rpc', {
                params: Object.assign({'function': search}, query)
            }))
            .map(r => {
                this.history.event([ r, JSON.stringify(r, void 0, 4) ]);
                return r;
            })
            .catch(e => {
                const resultError = Object.getOwnPropertyNames(e).reduce((alt: { [index: string]: any }, key) => {
                    alt[ key ] = e[ key ];
                    return alt;
                }, {});
                this.history.event([ e, JSON.stringify(resultError, void 0, 4) ]);
                throw e;
            });
    }

    public getParameters(search: Array<string>) {
        console.log(search);
        if (typeof search === 'undefined' || search.length === 0
            || typeof search[ 0 ] === 'undefined') {
            return;
        }
        const shortHand = search[ 0 ].split(/[\[\]]/ig)[ 1 ];
        this.permissions
            .flatMap((perm: { [index: string]: any }) => {
                if (search.length === 0 || typeof perm[ search[ 0 ] ] === 'undefined'
                    || perm[ search[ 0 ] ].indexOf('Function') === -1) {
                    this.parameters.next([]);
                    return Observable.throw('not found ' + search);
                }
                console.log('parameters ' + search[ 0 ]);
                this.functionName = shortHand;
                return this.call('get parameter names', {search: this.functionName});
            })
            .subscribe(r => {
                const params = [ shortHand ].concat((r as Array<string>).slice(1));
                if (this.functionName === shortHand) {
                    return this.parameters.next(params);
                }
            });
    }

    private setupPermissions(): void {
        this.call('get permissions')
            .subscribe((permissions) => {
                this.permissions.next(permissions);
            });
    }
}
