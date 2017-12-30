import { NgModule } from '@angular/core';
import { COMMON_MODULES } from '../core/core.module';
import { HistoryService } from './history/history-service';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { SearchService } from './search/search-service';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        routing
    ],
    declarations: [ HomeComponent, SearchComponent, HistoryComponent ],
    providers: [ SearchService, HistoryService ]
})
export class HomeModule {
}
