import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { HistoryService } from '../history/history-service';

@Component({
    selector: 'bc-slider',
    templateUrl: './slider.component.html',
    styleUrls: [ './slider.component.scss' ]
})
export class SliderComponent implements OnInit, OnDestroy {
    @Input() images: Array<string> = [];
    private historySub: Subscription;

    constructor(public ref: ChangeDetectorRef,
                public sanitizer: DomSanitizer,
                public history: HistoryService) {
    }

    ngOnInit() {
        // TODO: move to slilder-service.ts?
        this.historySub = this.history.updated.subscribe(i => {
            const svg = typeof i[ 0 ][ 0 ] === 'string' ? [ i[ 0 ][ 0 ] ] : i[ 0 ][ 0 ];
            if (svg.map) {
                this.images = svg.map((svg: string) => this.sanitizer.bypassSecurityTrustHtml(svg));
                this.ref.detectChanges();
            }
        });
    }

    ngOnDestroy() {
        if (typeof this.historySub !== 'undefined') {
            this.historySub.unsubscribe();
        }
    }
}
