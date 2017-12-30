import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_MODULES } from '../../core/core.module';
import { SliderComponent } from './slider.component';

@NgModule({
    imports: [
        ...COMMON_MODULES,
        RouterModule.forChild([ {path: '', component: SliderComponent} ] as Routes)
    ],
    declarations: [ SliderComponent ],
    providers: []
})
export class SliderModule {
}
