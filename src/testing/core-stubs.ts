import { HttpClient, HttpHandler } from '@angular/common/http';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule, sharedModules } from '../app/core/core.module';
import { LogService } from '../app/core/log/log.service';
import { LayoutModule } from '../app/layout/layout.module';
import { LayoutService } from '../app/layout/layout.service';
import { LogServiceStub } from './log-stubs';

export const testingPlatformModules: Array<any> = [
    BrowserModule,
    NoopAnimationsModule,
    RouterTestingModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateFakeLoader(),
            deps: [ HttpClient ]
        }
    }),
    LayoutModule,
    ...sharedModules,
    SharedModule.forRoot()
];

export const httpTestingProviders: Array<any> = [
    {
        provide: HttpClient,
        useFactory: (backend: HttpHandler) => new HttpClient(backend),
        deps: [ MockBackend ]
    },
    MockBackend,
    BaseRequestOptions
];

export const authTestingProviders: Array<any> = [
    LayoutService,
    ...httpTestingProviders,
    {provide: LogService, useClass: LogServiceStub}
];

export const catalogTestingProviders: Array<any> = [
    LayoutService,
    ...httpTestingProviders,
    {provide: LogService, useClass: LogServiceStub}
];
