import { ElementRef, Injectable } from '@angular/core';

const InlineEditor = require('@ckeditor/ckeditor5-build-inline');

@Injectable()
export class AclService {

    constructor() {

    }

    public initEditable(el: ElementRef, config: any) {
        el.nativeElement.setAttribute('id', config.id);
        el.nativeElement.innerHTML = config.html;

        for (let path of config.acl) {
            const els = Array.from(document.querySelectorAll(`#${config.id} ${path}`));
            for (let el of els) {
                el.setAttribute('contenteditable', 'true');
                InlineEditor
                    .create(el /** document.querySelector(path) */, {

                    })
                    .then((editor: any) => {
                        (window as any).editor = editor;
                    })
                    .catch((err: any) => {
                        console.log(err + ' - ' + path);
                        console.log(el);
                        console.error(err.stack);
                    });

            }
        }
    }
}
