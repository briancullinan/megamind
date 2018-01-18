import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { HistoryService } from '../history/history-service';

@Component({
    selector: 'bc-map',
    templateUrl: './map.component.html',
    styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit {
    @Input() lat: number = 51.678418;
    @Input() lng: number = 7.809007;
    private historySub: Subscription;

    constructor(public ref: ChangeDetectorRef,
                public sanitizer: DomSanitizer,
                public history: HistoryService) {
    }

    ngOnInit() {
        // TODO: move to map-service.ts?
        this.historySub = this.history.updated.subscribe(i => {
            const events = typeof i[ 0 ][ 0 ] === 'string' ? [ i[ 0 ][ 0 ] ] : i[ 0 ][ 0 ];
            if (events.map) {
                //    this.images = events.map((svg: string) => this.sanitizer.bypassSecurityTrustHtml(svg));
                this.ref.detectChanges();
            }
        });
    }
}
