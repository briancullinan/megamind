import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_MODULES } from '../../core/core.module';
import { AclService } from './acl-service';
import { EditorComponent } from './editor.component';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        RouterModule.forChild([ {path: '', component: EditorComponent} ] as Routes)
    ],
    declarations: [ EditorComponent ],
    exports: [ EditorComponent ],
    providers: [ AclService ]
})
export class EditorModule {
}
