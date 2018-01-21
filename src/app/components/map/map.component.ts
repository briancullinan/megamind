import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { HistoryService } from '../history/history-service';
import { AgmDirectionsDirective } from './directions';

@Component({
    selector: 'bc-map',
    templateUrl: './map.component.html',
    styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit, OnDestroy {
    @Input() zoom: number = 4;
    @Input() lat: number = 51.678418;
    @Input() lng: number = 7.809007;
    @Input() locations: Array<{ lat: number, lng: number, place_id: string }> = [];
    @ViewChild(AgmDirectionsDirective) vc: AgmDirectionsDirective;

    public originPlaceId: any; // its a example aleatory position
    public destinationPlaceId: any; // its a example aleatory position
    private historySub: Subscription;
    public waypoints: Array<{ location: { placeId: string } }> = [];

    constructor(public ref: ChangeDetectorRef,
                public sanitizer: DomSanitizer,
                public history: HistoryService) {
    }

    ngOnInit() {
        // TODO: move to map-service.ts?
        this.historySub = this.history.updated.subscribe(i => {
            const events = typeof i[ 0 ][ 0 ] === 'string' ? [ i[ 0 ][ 0 ] ] : i[ 0 ][ 0 ];
            if (events.filter) {
                this.locations = events.filter((e: any) => e.geometry);
                if (this.locations.length > 0) {
                    this.lat = this.locations[ 0 ].lat;
                    this.lng = this.locations[ 0 ].lng;
                    this.waypoints = this.locations.slice(1, this.locations.length - 1)
                        .map(p => ({location: {placeId: p.place_id}}));
                    console.log(this.waypoints);
                    this.originPlaceId = this.locations[ 0 ].place_id;
                    this.destinationPlaceId = this.locations[ this.locations.length - 1 ].place_id;
                }

                this.ref.detectChanges();
                this.vc.updateDirections();
            }
        });
    }

    ngOnDestroy() {
        if (typeof this.historySub !== 'undefined') {
            this.historySub.unsubscribe();
        }
    }
}
