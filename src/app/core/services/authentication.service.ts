import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  public login(credentials: {}): void {
    if (!credentials) {
      throw "No credentials provided";
    }

    this.http.post<any>("/api/user/login", credentials)
      .subscribe({
        next: res => {
          if (res.status) {
            localStorage.setItem("token", res.data.token);
            this.router.navigate(['lobby']);
          } else {
            alert(res.reason);
          }
        },
        error: err => {
          throw err;
        }
      })
  }

  public logout() {
    if (!localStorage.getItem('token')) {
      throw 'Token does not exist in the current context';
    }

    localStorage.remove('token');
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

}
