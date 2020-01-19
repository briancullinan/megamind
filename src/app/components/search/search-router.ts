import { Injectable, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';
import { RpcService } from '../rpc/rpc-service';
import { SearchService } from './search-service';

@Injectable()
export class RpcSearchRouter {
    public functionName = '';
    public parameters: { [index: string]: any } = {};
    private previous: { [index: string]: any } = {};
    private routeSub: Subscription;
    public initial = true;
    @Output() public events = new ReplaySubject<{ [index: string]: any }>(1);

    public updateParameters(s: Array<any>, params: { [index: string]: any } = {}) {
        // only update if its changed
        if (typeof s !== 'undefined'
            && typeof s[ 0 ] !== 'undefined'
            && (s[ 0 ] !== this.functionName
                || JSON.stringify(this.previous) !== JSON.stringify(params))) {
            this.functionName = s[ 0 ];
            this.previous = params;
            this.parameters = Object.keys(params).reduce((acc: { [index: string]: any }, k) => {
                if (k !== 'function' && typeof params[ k ] !== 'undefined') {
                    acc[ k ] = params[ k ];
                }
                return acc;
            }, {});
            this.events.next([ this.functionName, this.parameters ]);
            this.router.navigate(
                [ '/' + this.functionName, this.parameters ],
                {replaceUrl: true});
        }
    }

    public routeSubscription(route: ActivatedRoute) {
        return route.params
            .first()
            .flatMap(params => {
                console.log(params);
                this.functionName = params[ 'function' ];
                this.parameters = params;
                this.events.next([ this.functionName, this.parameters ]);
                if (this.functionName) {
                    return this.search.search(this.functionName)
                        .map((search: Array<string>) => ({params, search}));
                }
                return Observable.of({params, search: []});
            })
            .first();
    }

    constructor(public search: SearchService,
                public router: Router,
                public rpc: RpcService) {
        this.parameters = {};
        this.routeSub = this.rpc.parameters
            .subscribe(s => {
                this.updateParameters(s, this.parameters);
                // call the function when the page first loads
                if (typeof s !== 'undefined' && typeof s[ 0 ] !== 'undefined' && this.initial) {
                    this.initial = false;
                    this.rpc.call(this.functionName, this.parameters)
                        .subscribe(() => {
                        }, (e: any) => {
                            console.log(e);
                        });
                }
            });
    }
}
