import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class HistoryService {
    private history: Array<Array<any>> = [];
    public updated = new ReplaySubject<Array<Array<any>>>(1);
    public count = 10;

    constructor() {
    }

    // TODO: use a logging service instead of this
    public event(e: Array<any>) {
        this.history.unshift(e);
        if (this.history.length > this.count) {
            this.history.splice(this.count);
        }
        this.updated.next(this.history);
    }

    public top() {
        return this.history[ 0 ] || [];
    }
}
