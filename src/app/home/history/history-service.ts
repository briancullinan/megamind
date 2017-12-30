import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

const MAX_HISTORY = 10;

@Injectable()
export class HistoryService {
    private history: Array<Array<any>> = [];
    public updated = new ReplaySubject<Array<Array<any>>>(1);

    constructor() {
    }

    public event(e: Array<any>) {
        this.history.unshift(e);
        if (this.history.length > MAX_HISTORY) {
            this.history.splice(5);
        }
        this.updated.next(this.history);
    }

    public top() {
        return this.history[ 0 ] || [];
    }
}
