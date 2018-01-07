import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryConfig, GalleryModule as Gallery } from 'ng-gallery';
import { COMMON_MODULES } from '../../core/core.module';
import { GalleryComponent } from './gallery.component';

export const galleryConfig: GalleryConfig = {
    'thumbnails': {
        'width': 90,
        'height': 70,
        'position': 'top'
    }
};

@NgModule({
    imports: [
        ...COMMON_MODULES,
        Gallery.forRoot(galleryConfig),
        RouterModule.forChild([ {path: '', component: GalleryComponent} ] as Routes)
    ],
    declarations: [ GalleryComponent ],
    exports: [ GalleryComponent ],
    providers: []
})
export class GalleryModule {
}
