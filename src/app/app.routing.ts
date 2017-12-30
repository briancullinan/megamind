import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
