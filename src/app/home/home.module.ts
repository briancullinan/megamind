import { NgModule } from '@angular/core';
import 'hammerjs';
import { COMMON_MODULES } from '../core/core.module';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { RpcService } from './rpc-service';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        routing
    ],
    declarations: [ HomeComponent ],
    providers: [ RpcService ]
})
export class HomeModule {
}
