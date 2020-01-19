import { NgModule } from '@angular/core';
import { COMMON_MODULES } from '../../core/core.module';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        ...COMMON_MODULES
    ],
    declarations: [ SearchComponent ],
    exports: [ SearchComponent ],
    providers: []
})
export class SearchModule {
}
