import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/first';
import { Subscription } from 'rxjs/Subscription';
import { RpcSearchRouter } from '../search/search-router';
import { RpcService } from './rpc-service';

@Component({
    selector: 'bc-rpc',
    templateUrl: './rpc.component.html',
    styleUrls: [ './rpc.component.scss' ]
})
export class RpcComponent implements OnInit, OnDestroy {
    private routeSub: Subscription;
    private searcherSub: Subscription;
    public component: string = '';

    constructor(public searchRouter: RpcSearchRouter,
                public rpc: RpcService,
                public ref: ChangeDetectorRef,
                public router: Router,
                public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.component = this.router.url.split(/\//ig)[ 2 ];
        this.routeSub = this.router.events
            .filter(r => r instanceof NavigationEnd)
            .subscribe(e => {
                this.component = this.router.url.split(/\//ig)[ 2 ];
                this.ref.detectChanges();
            });
        this.searcherSub = this.searchRouter.routeSubscription(this.route)
            .subscribe(({search}) => {
                this.rpc.getParameters([ search[ 0 ] ]);
            });
    }

    ngOnDestroy() {
        if (typeof this.routeSub !== 'undefined') {
            this.routeSub.unsubscribe();
        }
        if (typeof this.searcherSub !== 'undefined') {
            this.searcherSub.unsubscribe();
        }
    }
}
