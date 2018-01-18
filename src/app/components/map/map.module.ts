import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_MODULES } from '../../core/core.module';
import { MapComponent } from './map.component';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB6-7CChLh6uU8YqPqpbrXemF4w2blXGf4'
        }),
        RouterModule.forChild([ {path: '', component: MapComponent} ] as Routes)
    ],
    declarations: [ MapComponent ],
    exports: [ MapComponent ],
    providers: []
})
export class MapModule {
}
