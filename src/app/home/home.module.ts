import { NgModule } from '@angular/core';
import { COMMON_MODULES } from '../core/core.module';
import { HistoryModule } from './history/history.module';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { RpcService } from './rpc/rpc-service';
import { RpcModule } from './rpc/rpc.module';
import { SearchService } from './search/search-service';
import { SearchModule } from './search/search.module';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        HistoryModule,
        SearchModule,
        RpcModule,
        routing
    ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    providers: [ RpcService, SearchService ]
})
export class HomeModule {
}
