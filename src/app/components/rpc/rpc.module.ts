import { NgModule } from '@angular/core';
import { COMMON_MODULES } from '../../core/core.module';
import { HistoryService } from '../history/history-service';
import { HistoryModule } from '../history/history.module';
import { SearchService } from '../search/search-service';
import { SearchModule } from '../search/search.module';
import { RpcService } from './rpc-service';
import { RpcComponent } from './rpc.component';
import { routing } from './rpc.routing';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        SearchModule,
        HistoryModule,
        routing
    ],
    declarations: [ RpcComponent ],
    exports: [ RpcComponent ],
    providers: [ SearchService, RpcService, HistoryService ]
})
export class RpcModule {
}
