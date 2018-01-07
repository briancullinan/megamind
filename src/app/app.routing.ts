import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'terms',
        loadChildren: './landing/terms/terms.module#TermsModule'
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
