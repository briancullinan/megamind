import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { authTestingProviders, testingPlatformModules } from '../../../testing/core-stubs';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>;
    let router: Router;
    let location: Location;
    let xhr: MockBackend;
    let comp: LoginComponent;

    // mock everything the SharedModule includes because we need to override AuthService
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginComponent ],
            imports: [
                RouterTestingModule.withRoutes([
                    {
                        path: 'auth/login',
                        component: LoginComponent
                    },
                    {
                        path: 'auth/register',
                        component: LoginComponent
                    }
                ]),
                ...testingPlatformModules
            ],
            providers: [ ...authTestingProviders ]
        });
        fixture = TestBed.createComponent(LoginComponent);
        comp = fixture.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        xhr = fixture.debugElement.injector.get(MockBackend);
        location = fixture.debugElement.injector.get(Location);
        xhr.connections.subscribe((connection: any) => {
            connection.mockRespond(new Response({
                body: JSON.stringify('hit')
            } as ResponseOptions));
        });

    });

    it('should load LoginComponent', done => {
        expect(comp).not.toBeNull('should be created successfully');

        fixture.whenStable().then(() => {
            done();
        });
    });

    it('should require password', done => {
        fixture.whenStable().then(() => {
            comp.onLogin();
            done();
        });
    });

    it('should switch to register form', done => {
        done();
    });

});

