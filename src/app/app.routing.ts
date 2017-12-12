﻿import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'terms',
        loadChildren: './landing/terms/terms.module#TermsModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});