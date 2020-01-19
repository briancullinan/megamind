import { ElementRef, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LayoutService {

    sidebarOpen: Observable<boolean>;
    focusElement: BehaviorSubject<ElementRef | null> = new BehaviorSubject(void 0);
    routeClass: BehaviorSubject<string> = new BehaviorSubject(void 0);

    static shouldUseSmallFooter(url: string): boolean {
        return url.indexOf('home') > -1
            && typeof url.split(/[\/#?]/ig)[ 2 ] !== 'undefined'
            && url.split(/[\/#?]/ig)[ 2 ] !== '';
    }

    constructor(public router: Router) {
        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => {
                let urlClass = e.url.split(/[\/#?]/ig)[ 1 ];
                if (typeof urlClass === 'undefined' || urlClass.trim() === '' || urlClass === null) {
                    urlClass = 'home';
                }
                const footerClass = LayoutService.shouldUseSmallFooter(this.router.url) ? ' funnel ' : '';
                this.routeClass.next(urlClass + ' ' + footerClass);
            });
    }
}
