import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

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
    @Input() public hideEmail = false;
    @Input() public hidePassword = false;

    public password: string;
    public displayName: string;
    public email: string;
    public phoneNumber: string;

    constructor(public ref: ChangeDetectorRef,
                public auth: AngularFireAuth) {
    }

    ngOnChanges() {
        setTimeout(() => {
            this.ref.markForCheck();
        }, 100);
    }
}

