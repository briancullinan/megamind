import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from './search-service';

@Component({
    selector: 'bc-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
})
export class SearchComponent implements OnInit, OnDestroy {
    @Input() search = '';
    @Output() submit = new EventEmitter<Array<any>>();
    functionName = '';
    functionParameters: Array<string> = [];
    @Input() parameters: { [index: string]: any } = {};
    searchControl = new FormControl();
    error: boolean;
    public loading: boolean;

    private searchSub: Subscription;
    private parameterSub: Subscription;

    constructor(public service: SearchService,
                public ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
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
        this.submit.emit([ this.functionName, params ]);
        this.service.rpc.call(this.functionName, params)
            .subscribe(() => {
            }, (e: any) => {
                console.log(e);
            });
        return false;
    }

    public getParameters() {
        this.loading = true;
        this.ref.detectChanges();
        this.service.search(this.search)
            .first()
            .subscribe((search) => {
                this.service.rpc.getParameters([ search[ 0 ] ]);
            });
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
