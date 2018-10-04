import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogincheckService {

  constructor(private http: HttpClient) {

  }

  checkIfLoggedIn(): Observable<{message: string}> {
    return this.http.get<{message: string}>('http://localhost:8080/isloggedin');
  }
}
