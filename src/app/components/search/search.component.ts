import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { RpcSearchRouter } from './search-router';
import { SearchService } from './search-service';

@Component({
    selector: 'bc-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
})
export class SearchComponent implements OnInit, OnDestroy {
    @Input() parameters: { [index: string]: any } = {};
    @Input() search = '';
    functionName = '';
    functionParameters: Array<string> = [];
    searchControl = new FormControl();
    error: boolean;
    public loading: boolean;

    private searchSub: Subscription;
    private parameterSub: Subscription;
    private routerSub: Subscription;

    constructor(public service: SearchService,
                public searchRouter: RpcSearchRouter,
                public ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.routerSub = this.searchRouter.events
            .subscribe(() => {
                this.search = this.searchRouter.functionName;
                this.parameters = this.searchRouter.parameters;
                this.ref.detectChanges();
            });
        this.parameterSub = this.service.rpc.parameters
            .subscribe(p => this.updateParameters(p), e => {
                console.log(e);
                this.error = true;
                this.updateParameters([]);
            });
        this.searchSub = this.searchControl.valueChanges
            .debounceTime(100)
            .subscribe(s => {
                this.service.search(s);
            });
    }

    ngOnDestroy(): void {
        if (typeof this.routerSub !== 'undefined') {
            this.routerSub.unsubscribe();
        }
        if (typeof this.searchSub !== 'undefined') {
            this.searchSub.unsubscribe();
        }
        if (typeof this.parameterSub !== 'undefined') {
            this.parameterSub.unsubscribe();
        }
    }

    sendCommand(): boolean {
        if (typeof this.functionName === 'undefined'
            || this.functionName === '') {
            return false;
        } else {
            // TODO: call import with the search terms if it is not a function
        }
        this.ref.detectChanges();
        const params = this.functionParameters.reduce((acc, p) => {
            acc[ p ] = this.parameters[ p ];
            return acc;
        }, {} as { [index: string]: any });
        this.service.rpc.call(this.functionName, params)
            .subscribe(() => {
            }, (e: any) => {
                console.log(e);
            });
        return false;
    }

    public getParameters() {
        this.loading = true;
        this.service.search(this.search)
            .first()
            .subscribe((search) => {
                this.service.rpc.getParameters([ search[ 0 ] ]);
            });
        this.ref.detectChanges();
    }

    public updateParameters(r: Array<string>): void {
        this.loading = false;
        console.log(r);
        if (typeof r === 'undefined' || typeof r[ 0 ] === 'undefined') {
            this.functionName = '';
            this.functionParameters = [];
        } else {
            // every time command changes, set in URL
            //const keep = this.functionParameters.map(p => this.parameters[ p ]);
            this.functionName = r[ 0 ];
            this.functionParameters = r.slice(1);
        }
        let that = this;
        setTimeout(() => that.ref.detectChanges(), 50);
    }
}
