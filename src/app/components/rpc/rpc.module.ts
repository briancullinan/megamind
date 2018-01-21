import { NgModule } from '@angular/core';
import { COMMON_MODULES } from '../../core/core.module';
import { HistoryModule } from '../history/history.module';
import { SearchModule } from '../search/search.module';
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
    providers: []
})
export class RpcModule {
}
