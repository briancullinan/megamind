import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_MODULES } from '../../core/core.module';
import { HistoryComponent } from './history.component';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        RouterModule.forChild([ {path: '', component: HistoryComponent} ] as Routes)
    ],
    declarations: [ HistoryComponent ],
    exports: [ HistoryComponent ],
    providers: []
})
export class HistoryModule {
}
