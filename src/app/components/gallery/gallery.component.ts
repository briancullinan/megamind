import { Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';
import { Subscription } from 'rxjs/Subscription';
import { HistoryService } from '../history/history-service';

@Component({
    selector: 'bc-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: [ './gallery.component.scss' ]
})
export class GalleryComponent implements OnInit {
    @Input() images: Array<string> = [];
    private historySub: Subscription;

    constructor(public gallery: Gallery,
                public history: HistoryService) {
    }

    ngOnInit() {
        this.historySub = this.history.updated.subscribe(i => {
            if (i[ 0 ][ 0 ].map) {
                const images: GalleryItem[] = i[ 0 ][ 0 ].map((i: string) => ({
                    src: i,
                    thumbnail: i,
                    text: i
                }));

                this.gallery.load(images);
            }
        });
    }
}
