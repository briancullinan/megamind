import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpcComponent } from './rpc/rpc.component';

export const homeRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'tell joke'},
    // TODO: lookup display function
    {path: 'latest s3 bucket', pathMatch: 'full', redirectTo: '/latest s3 bucket/gallery'},
    {path: 'tip git tree', pathMatch: 'full', redirectTo: '/tip git tree/slider'},
    {path: 'calendar search heatmap', pathMatch: 'full', redirectTo: '/calendar search heatmap/slider'},
    {path: 'search notebook questions', pathMatch: 'full', redirectTo: '/search notebook questions/code'},
    {
        path: ':function',
        component: RpcComponent,
        data: {roles: [ 'anonymous', 'user' ]},
        children: [
            {
                path: 'gallery',
                loadChildren: './gallery/gallery.module#GalleryModule'
            },
            {
                path: 'slider',
                loadChildren: './slider/slider.module#SliderModule'
            },
            {
                path: 'code',
                loadChildren: './code/code.module#CodeModule'
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(homeRoutes);
