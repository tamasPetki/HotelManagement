import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogincheckService {

  constructor(private http: HttpClient) {

  }

  checkIfLoggedIn(): Observable<{'loggedin': string}> {
    return this.http.get<{'loggedin': string}>('http://localhost:8080/isloggedin');
  }
}
