import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../search/search-service';
import { RpcService } from './rpc-service';

@Component({
    selector: 'bc-rpc',
    templateUrl: './rpc.component.html',
    styleUrls: [ './rpc.component.scss' ]
})
export class RpcComponent implements OnInit, OnDestroy {
    public functionName = '';
    public parameters: { [index: string]: any } = {};
    private routeSub: Subscription;
    private initial = true;
    private previous: { [index: string]: any } = {};

    constructor(public route: ActivatedRoute,
                public router: Router,
                public rpc: RpcService,
                public search: SearchService) {
    }

    updateParameters(s: Array<any>, params: { [index: string]: any } = {}) {
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
            this.router.navigate(
                [
                    '/' + this.functionName,
                    this.parameters
                ],
                {replaceUrl: true});
        }
    }

    ngOnInit() {
        this.parameters = {};
        this.route.params.first()
            .flatMap(params => {
                this.functionName = params[ 'function' ];
                this.parameters = params;

                if (this.functionName) {
                    return this.search.search(this.functionName)
                        .map((search: Array<string>) => ({params, search}));
                }
                return Observable.of({params, search: []});
            })
            .first()
            .subscribe(({search}) => {
                this.rpc.getParameters([ search[ 0 ] ]);
            });
        this.routeSub = this.rpc.parameters
            .subscribe(s => {
                this.updateParameters(s, this.parameters);
                // call the function when the page first loads
                if (typeof s !== 'undefined' && typeof s[ 0 ] !== 'undefined'
                    && this.initial) {
                    this.initial = false;
                    this.rpc.call(this.functionName, this.parameters)
                        .subscribe(() => {
                        }, (e: any) => {
                            console.log(e);
                        });
                }
            });
    }

    updateFromCommand(r: Array<any>) {
        if (!r.length) {
            return;
        }
        this.updateParameters(r, r[ 1 ]);
    }

    ngOnDestroy() {
        if (typeof this.routeSub !== 'undefined') {
            this.routeSub.unsubscribe();
        }
    }
}
