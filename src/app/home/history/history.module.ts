import { NgModule } from '@angular/core';
import { COMMON_MODULES } from '../../core/core.module';
import { HistoryService } from './history-service';
import { HistoryComponent } from './history.component';

@NgModule({
    imports: [
        ...COMMON_MODULES
    ],
    declarations: [ HistoryComponent ],
    exports: [ HistoryComponent ],
    providers: [ HistoryService ]
})
export class HistoryModule {
}
