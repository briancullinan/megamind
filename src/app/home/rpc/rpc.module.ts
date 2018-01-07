import { NgModule } from '@angular/core';
import { COMMON_MODULES } from '../../core/core.module';
import { HistoryService } from '../history/history-service';
import { HistoryModule } from '../history/history.module';
import { SearchModule } from '../search/search.module';
import { RpcService } from './rpc-service';
import { RpcComponent } from './rpc.component';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        SearchModule,
        HistoryModule
    ],
    declarations: [ RpcComponent ],
    exports: [ RpcComponent ],
    providers: [ RpcService, HistoryService ]
})
export class RpcModule {
}
