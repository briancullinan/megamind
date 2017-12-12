import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RpcService {

    constructor(public http: HttpClient) {
    }

}
