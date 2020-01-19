import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_MODULES } from '../../core/core.module';
import { AgmDirectionsDirective } from './directions';
import { MapComponent } from './map.component';

export const mapsConfig = {
    apiKey: 'AIzaSyB6-7CChLh6uU8YqPqpbrXemF4w2blXGf4',
    libraries: [ 'places' ]
};

@NgModule({
    imports: [
        ...COMMON_MODULES,
        AgmCoreModule.forRoot(mapsConfig),
        RouterModule.forChild([ {path: '', component: MapComponent} ] as Routes)
    ],
    declarations: [ MapComponent, AgmDirectionsDirective ],
    exports: [ MapComponent ],
    providers: []
})
export class MapModule {
}
