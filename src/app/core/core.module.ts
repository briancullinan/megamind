import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtHelper } from 'angular2-jwt';
import { RegisterFormComponent } from '../auth/register-form/register-form.component';
import { HistoryService } from '../components/history/history-service';
import { RpcService } from '../components/rpc/rpc-service';
import { RpcSearchRouter } from '../components/search/search-router';
import { SearchService } from '../components/search/search-service';
import { DialogGuard } from './dialog-guard';
import { LogService } from './log/log.service';

// this is from MaterialModule which is deprecated
export const materialModules: Array<any> = [
    MatInputModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatTabsModule
];

export const sharedModules: Array<any> = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    HttpClientModule,
    ...materialModules
];

export function HttpClientLoaderFactory(http: HttpClient): TranslateLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const SHARED_COMPONENTS: Array<any> = [
    RegisterFormComponent
];

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpClientLoaderFactory,
                deps: [ HttpClient ]
            }
        }),
        ...sharedModules
    ],
    declarations: SHARED_COMPONENTS,
    exports: SHARED_COMPONENTS
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                DialogGuard,
                JwtHelper,
                LogService,
                HttpClient,
                SearchService,
                RpcService,
                HistoryService,
                RpcSearchRouter
            ]
        };
    }
}

export const COMMON_MODULES = [
    ...sharedModules,
    SharedModule
];
