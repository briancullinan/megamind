import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { HistoryService } from '../history/history-service';

@Component({
    selector: 'bc-slider',
    templateUrl: './slider.component.html',
    styleUrls: [ './slider.component.scss' ]
})
export class SliderComponent implements OnInit {
    @Input() images: Array<string> = [];
    private historySub: Subscription;

    constructor(public ref: ChangeDetectorRef,
                public sanitizer: DomSanitizer,
                public history: HistoryService) {
    }

    ngOnInit() {
        this.historySub = this.history.updated.subscribe(i => {
            if (i[ 0 ][ 0 ].map) {
                this.images = i[ 0 ][ 0 ].map(svg => this.sanitizer.bypassSecurityTrustHtml(svg));
                this.ref.detectChanges();
            }
        });
    }
}
