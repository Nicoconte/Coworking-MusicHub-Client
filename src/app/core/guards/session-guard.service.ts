import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";

import { AuthenticationService } from '../services/authentication.service';



@Injectable({
  providedIn: 'root'
})
export class SessionGuardService implements CanActivate {

  constructor(private authentication: AuthenticationService, private router: Router) { }

  canActivate(): boolean{
    if (this.authentication.isAuthenticated()) {
      this.router.navigate(['/lobby']);
      return false;
    }

    return true;
  }
}
