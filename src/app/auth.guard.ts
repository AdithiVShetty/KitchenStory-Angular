import {CanActivate, Router} from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({ // Add @Injectable() decorator here
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

} 
