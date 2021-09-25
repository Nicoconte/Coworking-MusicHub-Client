import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";

import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authentication: AuthenticationService, private router: Router) { }

  canActivate(): boolean{
    if (!this.authentication.isAuthenticated()) {
      this.router.navigate(['/signin']);
      return false;
    }

    return true;
  }

}
