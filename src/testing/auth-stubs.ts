import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthServiceStub {
    loggedIn: Subject<boolean> = new Subject();

    constructor(public http: HttpClient) {
        this.isLoggedIn();
    }

    logout(): void {
    }

    forgotPassword(email: string): Observable<HttpResponse<any>> {
        return Observable.of(new HttpResponse({status: 200}));
    }

    passwordReset(email: string, code: string, newPassword: string) {
        return Observable.of(new HttpResponse({status: 200}));
    }

    isLoggedIn(): boolean {
        return true;
    }
}

@Injectable()
export class AuthManagerStub {
    private tokenVar = 'TestToken';
    private serverVar = 'TestServer';

    getToken(): string {
        return JSON.stringify({
            access_token: '',
            given_name: '',
            family_name: 'C',
            email: 'b@c.actops.com'
        });
    }

    tokenExpired(): boolean {
        return true;
    }

    getDecodedToken(): any {
        return JSON.parse(this.getToken());
    }

    getAuthorizationHeader(): Observable<HttpHeaders> {
        const headers = new HttpHeaders();
        headers.append('Authorization', `Bearer ${this.getToken()}`);

        return Observable.of(headers);
    }

    setToken(token: string): void {
        this.tokenVar = token;
    }

    clear(): void {
        this.tokenVar = null;
        this.serverVar = null;
    }
}

export class MailgunValidatorServiceStub {
    validate() {
        return Observable.of(Response);
    }
}
