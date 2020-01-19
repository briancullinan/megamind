import { Location } from '@angular/common';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { MatDialog } from '@angular/material';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { authTestingProviders, testingPlatformModules } from '../../testing/core-stubs';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../auth/login/login.component';
import { LogoutComponent } from '../auth/logout/logout.component';
import { DialogGuard } from './dialog-guard';

describe('DialogGuard', () => {
    let fixture: ComponentFixture<AppComponent>;
    let router: Router;
    let location: Location;
    let xhr: MockBackend;
    let comp: AppComponent;

    // mock everything the SharedModule includes because we need to override AuthService
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent, LogoutComponent, LoginComponent ],
            imports: [
                RouterTestingModule.withRoutes([
                    {
                        path: 'logout',
                        component: LogoutComponent,
                        canActivate: [ DialogGuard ],
                        data: {roles: [ 'user' ]}
                    },
                    {
                        path: 'login',
                        component: LoginComponent,
                        canActivate: [ DialogGuard ],
                        data: {roles: [ 'anonymous' ]}
                    }
                ]),
                ...testingPlatformModules
            ],
            providers: [ ...authTestingProviders ]
        });
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        comp.ngOnInit();
        router = fixture.debugElement.injector.get(Router);
        xhr = fixture.debugElement.injector.get(MockBackend);
        location = fixture.debugElement.injector.get(Location);
    });

    it('should load DialogGuard', () => {
        inject([ MatDialog, TranslateService ], (dialog: MatDialog, translate: TranslateService) => {
            const guard = new DialogGuard(dialog, translate, router);
            expect(guard instanceof DialogGuard);
        });
    });

    it('should show a dialog when /login is navigated', () => {
        inject([ MatDialog, TranslateService ], (dialog: MatDialog, translate: TranslateService) => {
            const guard = new DialogGuard(dialog, translate, router);
            spyOn(localStorage, 'getItem').and.returnValue(void 0);
            const route = <ActivatedRouteSnapshot>router.config
                .filter(c => c.path === 'login' && typeof c.data !== 'undefined' && c.data.roles.length === 1)[ 0 ];
            expect(route).not.toBeUndefined();
            const result = guard.canActivate(route, null);
            expect(result).toBe(false); // false means the route is blocked and turned in to a dialog
        });
    });

    it('should not show a dialog for other routes', () => {
        inject([ MatDialog, TranslateService ], (dialog: MatDialog, translate: TranslateService) => {
            const guard = new DialogGuard(dialog, translate, router);
            spyOn(localStorage, 'getItem').and.returnValue(void 0);
            const route = <ActivatedRouteSnapshot>router.config
                .filter(c => c.path === 'login' && typeof c.data !== 'undefined' && c.data.roles.length === 1)[ 0 ];
            expect(route).not.toBeUndefined();
            const result = guard.canActivateChild(route, null);
            expect(result).toBe(true); // true means the route is ok
        });
    });

});

