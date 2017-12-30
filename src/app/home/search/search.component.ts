import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from './search-service';

@Component({
    selector: 'bc-search-parameters',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
})
export class SearchComponent implements OnInit, OnDestroy {
    @Input() search = '';
    functionName = '';
    functionParameters: Array<string> = [];
    parameters: { [index: string]: any } = {};
    searchControl = new FormControl();
    error: boolean;

    private searchSub: Subscription;
    private parameterSub: Subscription;

    constructor(public rpc: SearchService,
                public ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.parameterSub = this.rpc.parameters
            .subscribe(p => this.updateParameters(p), e => {
                console.log(e);
                this.error = true;
                this.updateParameters([]);
            });
        this.searchSub = this.searchControl.valueChanges
            .debounceTime(100)
            .subscribe(s => {
                this.rpc.search(s);
            });
    }

    ngOnDestroy(): void {
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

        this.rpc.call(this.functionName, this.parameters)
            .subscribe(() => {
            }, (e: any) => {
                console.log(e);
            });
        return false;
    }

    public updateParameters(r: Array<string>): void {
        if (typeof r === 'undefined' || typeof r[ 0 ] === 'undefined') {
            this.functionName = '';
            this.functionParameters = [];
        } else {
            // every time command changes, set in URL
            const keep = this.functionParameters.map(p => this.parameters[ p ]);
            this.functionName = r[ 0 ];
            this.functionParameters = r.slice(1);
            this.parameters = this.functionParameters.reduce((acc, p, i) => {
                acc[ p ] = keep[ i ];
                return acc;
            }, {} as { [index: string]: any });
        }
        let that = this;
        setTimeout(() => that.ref.detectChanges(), 50);
    }
}
