import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'hammerjs';

import { AppComponent } from './app.component';
// routing
import { routing } from './app.routing';
import { SharedModule, sharedModules } from './core/core.module';
// sub-modules for lazy loading
import { LayoutModule } from './layout/layout.module';

export const FirebaseConfig = {
    apiKey: 'AIzaSyBhdKHj2mxQQ6Xu25R_8lb8lSPmPIy80DY',
    authDomain: 'megamind-d3c88.firebaseapp.com',
    databaseURL: 'https://megamind-d3c88.firebaseio.com',
    projectId: 'megamind-d3c88',
    storageBucket: 'megamind-d3c88.appspot.com',
    messagingSenderId: '759321393993'
};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        ...sharedModules,

        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,

        routing, // the rest of the modules are lazy-loaded
        LayoutModule
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
