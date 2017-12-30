import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/first';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from './search/search-service';

@Component({
    selector: 'bc-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit, OnDestroy {
    private functionName = '';
    private routeSub: Subscription;
    private initial = true;

    constructor(public route: ActivatedRoute,
                public router: Router,
                public rpc: SearchService) {
    }

    updateParameters(s: Array<any>) {
        // only update if its changed
        if (typeof s !== 'undefined'
            && typeof s[ 0 ] !== 'undefined'
            && s[ 0 ] !== this.functionName) {
            this.functionName = s[ 0 ];
            this.router.navigate(
                [ '/' + this.functionName ],
                {replaceUrl: true});
        }
    }

    ngOnInit() {
        let parameters: { [index: string]: any } = {};
        this.route.params.first().subscribe(params => {
            const search = params[ 'function' ];
            parameters = params;
            if (search) {
                this.rpc.search(search);
            } else {
                this.updateParameters([ 'tell joke' ]);
            }
        });
        this.routeSub = this.rpc.parameters
            .subscribe(s => {
                this.updateParameters(s);
                // call the function when the page first loads
                if (typeof s !== 'undefined' && typeof s[ 0 ] !== 'undefined'
                    && this.initial) {
                    this.initial = false;
                    this.rpc.call(this.functionName, parameters)
                        .subscribe(() => {
                        }, (e: any) => {
                            console.log(e);
                        });
                }
            });
    }

    ngOnDestroy() {
        if (typeof this.routeSub !== 'undefined') {
            this.routeSub.unsubscribe();
        }
    }
}
