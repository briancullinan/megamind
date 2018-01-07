import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
    selector: 'bc-forgot',
    templateUrl: './forgot-password.component.html',
    styleUrls: [ './forgot-password.component.scss' ]
})
export class ForgotPasswordComponent {
    email: string;
    error = '';

    constructor(public router: Router) {
    }

    onNext(): void {
        const authx = firebase.auth();
        authx.sendPasswordResetEmail(this.email)
            .then(() => {
                alert(' Email sent');
            }, (error: any) => {
                alert(error);
            });
    }

}
