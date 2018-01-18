import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpcComponent } from './rpc.component';

export const rpcRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/tell joke'},
    // TODO: lookup display function
    {path: 'latest s3 bucket', pathMatch: 'full', redirectTo: '/latest s3 bucket/gallery'},
    {path: 'tip git tree', pathMatch: 'full', redirectTo: '/tip git tree/slider'},
    {path: 'calendar search heatmap', pathMatch: 'full', redirectTo: '/calendar search heatmap/slider'},
    {path: 'search notebook questions', pathMatch: 'full', redirectTo: '/search notebook questions/code'},
    {path: 'search timeline events', pathMatch: 'full', redirectTo: '/search timeline events/map'},
    {
        path: ':function',
        component: RpcComponent,
        children: [
            {
                path: 'gallery',
                loadChildren: '../gallery/gallery.module#GalleryModule'
            },
            {
                path: 'slider',
                loadChildren: '../slider/slider.module#SliderModule'
            },
            {
                path: 'code',
                loadChildren: '../code/code.module#CodeModule'
            },
            {
                path: 'map',
                loadChildren: '../map/map.module#MapModule'
            },
            {
                path: '**'
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(rpcRoutes);
