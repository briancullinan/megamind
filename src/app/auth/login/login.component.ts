import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/let';

@Component({
    selector: 'bc-login-page',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements AfterViewInit {
    public email: string;
    public password: string;
    public message: string;
    public isLogin = false;
    public isRegister = false;
    redirectUrl: string;

    constructor(public router: Router,
                public ref: ChangeDetectorRef,
                public fireAuth: AngularFireAuth) {
        if (this.router.url.indexOf('register') > -1) {
            this.isRegister = true;
            this.isLogin = false;
        } else {
            this.isRegister = false;
            this.isLogin = true;
        }
    }

    ngAfterViewInit(): void {
        if (this.router.url.indexOf('forgot') > -1) {
            this.communicateError('FORGOT');
        }
        if (this.router.url.indexOf('redirectUrl') > -1) {
            this.redirectUrl = decodeURIComponent(this.router.url.substr(this.router.url.indexOf('redirectUrl')
                + 'redirectUrl='.length));
        }
    }

    onRegister(): void {
        this.fireAuth.auth.createUserWithEmailAndPassword(
            this.email,
            this.password);
    }

    onLogin(): void {
        try {
            this.fireAuth.auth.signInWithEmailAndPassword(this.email, this.password)
                .catch((e: any) => this.communicateError('Error logging in: ' + e.toString()));
        } catch (e) {
            this.communicateError('Error logging in: ' + e.toString());
        }
    }

    loginGoogle(): void {
        this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    loginTwitter(): void {
        this.fireAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    }

    loginFacebook(): void {
        this.fireAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }

    private communicateError(msg: string): void {
        this.message = msg;
        this.ref.detectChanges();
    }

}
