import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
    // TODO: lookup display function
    {path: 'latest s3 bucket', pathMatch: 'full', redirectTo: '/latest s3 bucket/gallery'},
    {path: 'tip git tree', pathMatch: 'full', redirectTo: '/tip git tree/slider'},
    {
        path: ':function',
        component: HomeComponent,
        data: {roles: [ 'anonymous', 'user' ]},
        children: [
            {
                path: 'gallery',
                loadChildren: './gallery/gallery.module#GalleryModule'
            },
            {
                path: 'slider',
                loadChildren: './slider/slider.module#SliderModule'
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(homeRoutes);
