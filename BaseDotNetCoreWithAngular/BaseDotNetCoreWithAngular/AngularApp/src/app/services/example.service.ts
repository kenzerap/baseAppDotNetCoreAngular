import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
export class ExampleService {
    baseUrl = 'http://localhost:53316/';

    constructor(private http: HttpClient) { }

    getMessage(): Observable<any> {
        return this.http.get(this.baseUrl + 'api/home')
            .map(res => res)
            .catch(err => Observable.throw(err));
    }
}