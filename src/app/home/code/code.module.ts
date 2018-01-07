import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_MODULES } from '../../core/core.module';
import { CodeComponent } from './code.component';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        RouterModule.forChild([ {path: '', component: CodeComponent} ] as Routes)
    ],
    declarations: [ CodeComponent ],
    exports: [ CodeComponent ],
    providers: []
})
export class CodeModule {
}
