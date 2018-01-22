import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { HistoryService } from '../history/history-service';
import { AclService } from './acl-service';

@Component({
    selector: 'bc-editor',
    templateUrl: './editor.component.html',
    styleUrls: [ './editor.component.scss' ]
})
export class EditorComponent implements OnInit, OnDestroy {
    private historySub: Subscription;
    private html: SafeHtml;

    constructor(public ref: ChangeDetectorRef,
                public history: HistoryService,
                public sanitizer: DomSanitizer,
                public host: ElementRef,
                public service: AclService) {
    }

    ngOnInit(): void {
        this.historySub = this.history.updated.subscribe((h: any) => {
            if (h[ 0 ] && h[ 0 ][ 0 ] && h[ 0 ][ 0 ].html) {
                this.html = this.sanitizer.bypassSecurityTrustHtml(h.html);
                this.service.initEditable(this.host, h[ 0 ][ 0 ]);
            }
            this.ref.detectChanges();
        });
    }

    ngOnDestroy(): void {
        if (typeof this.historySub !== 'undefined') {
            this.historySub.unsubscribe();
        }
    }

}
