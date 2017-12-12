import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RpcService } from './rpc-service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'bc-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    search = 'tell joke';
    history: Array<Array<any>> = [];
    loading = false;
    functionName = '';
    functionParameters: Array<string> = [];
    parameters: { [index: string]: any } = {};
    myControl = new FormControl();
    error: boolean;

    private searchSub: Subscription;
    private parameterSub: Subscription;

    constructor(public rpc: RpcService,
                public ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.setupParameters();
        this.searchSub = this.myControl.valueChanges
            .debounceTime(100)
            .subscribe(s => this.rpc.search(s));
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
        this.loading = true;
        if (typeof this.functionName === 'undefined'
            || this.functionName === '') {
            return false;
        } else {
            // TODO: call import with the search terms if it is not a function
        }

        this.history.unshift(['megamind', this.functionName, JSON.stringify(this.parameters, void 0, 4)]);
        if (this.history.length > 5) {
            this.history.splice(5);
        }

        this.rpc.call(this.functionName, this.parameters)
            .subscribe((r: any) => {
                this.loading = false;
                this.history.unshift([r, JSON.stringify(r, void 0, 4)]);
                this.ref.detectChanges();
            }, (e: any) => {
                console.log(e);
                this.loading = false;
                this.history.unshift([e, JSON.stringify(e, void 0, 4)]);
                this.ref.detectChanges();
            });
        this.ref.detectChanges();
        return false;
    }

    private setupParameters(): void {
        this.parameterSub = this.rpc.permissionsFiltered
            .flatMap(s => {
                this.error = false;
                if (this.history.length > 5) {
                    this.history.splice(5);
                }
                this.functionName = s[0];
                console.log(s.length);
                if (this.search.length === 0) {
                    return Observable.of([]);
                }
                this.ref.detectChanges();
                return this.rpc.parameters(s[0]);
            })
            .subscribe((r: Array<string>) => {
                const keep = this.functionParameters.map(p => this.parameters[p]);
                this.loading = false;
                this.functionParameters = r.slice(1);
                this.parameters = this.functionParameters.reduce((acc, p, i) => {
                    acc[p] = keep[i];
                    return acc;
                }, {} as { [index: string]: any });
                this.ref.detectChanges();
            }, e => {
                console.log(e);
                this.error = true;
                this.loading = true;
                this.functionParameters = [];
                this.parameters = {};
                this.ref.detectChanges();
            });
    }
}
