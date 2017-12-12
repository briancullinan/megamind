import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
@Component({
    selector: 'bc-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: [ './register-form.component.scss' ]
})
export class RegisterFormComponent implements OnChanges {
    @Input() public auth: firebase.auth.Auth;
    @Input() public hideEmail = false;
    @Input() public hidePassword = false;

    constructor(public ref: ChangeDetectorRef,
                public fireAuth: AngularFireAuth) {
    }

    ngOnChanges() {
        setTimeout(() => {
            this.ref.markForCheck();
        }, 100);
    }
}

