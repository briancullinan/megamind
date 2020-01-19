import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as Prism from 'prismjs';
import { Subscription } from 'rxjs/Subscription';
import { HistoryService } from '../history/history-service';

require('../../../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js');

// simple component for displaying code
@Component({
    selector: 'bc-code',
    templateUrl: './code.component.html',
    styleUrls: [ './code.component.scss' ]
})
export class CodeComponent implements OnInit, OnDestroy {
    @Input() selected: any = {};
    private language: string;
    private historySub: Subscription;

    constructor(public history: HistoryService,
                // trust relationship with RPC service like jupyter notebooks?
                public sanitizer: DomSanitizer,
                public ref: ChangeDetectorRef) {
    }

    // TODO: move all this to the code-service.ts?
    ngOnInit() {
        this.historySub = this.history.updated.subscribe(i => {
            if (i[ 0 ][ 0 ].code) {
                this.selected = i[ 0 ][ 0 ];
                this.language = i[ 0 ][ 0 ].language;
                this.ref.detectChanges();
            }
        });
    }

    ngOnDestroy() {
        if (typeof this.historySub !== 'undefined') {
            this.historySub.unsubscribe();
        }
    }

    highlight(code: string): SafeHtml {
        if (typeof code === 'undefined' || code === null) {
            return '';
        }

        return this.sanitizer.bypassSecurityTrustHtml(Prism.highlight(code, Prism.languages[ this.language ]));
    }
}
