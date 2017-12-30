import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HistoryService } from './history-service';

@Component({
    selector: 'bc-command-history',
    templateUrl: './history.component.html',
    styleUrls: [ './history.component.scss' ]
})
export class HistoryComponent implements OnInit, OnDestroy {
    private historySub: Subscription;
    public history: Array<Array<any>> = [];

    constructor(public ref: ChangeDetectorRef,
                public service: HistoryService) {
    }

    ngOnInit(): void {
        this.historySub = this.service.updated.subscribe((h) => {
            this.history = h;
            this.ref.detectChanges();
        });
    }

    ngOnDestroy(): void {
        if (typeof this.historySub !== 'undefined') {
            this.historySub.unsubscribe();
        }
    }

}
