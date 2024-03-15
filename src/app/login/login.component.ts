import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginCredentials: any = {
    EmailId: '',
    Password: ''
  };
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  login(): void {
    console.log(this.loginCredentials);
    this.userService.login(this.loginCredentials).subscribe(
      (response) => {
        if (response.userType === 'admin') 
        {
          this.router.navigate(['/master-food-menu']);
        } 
        else if (response.userType === 'user') 
        {
          //const userId = response.split('/')[1];
          this.router.navigate(['/home']);
        } 
        else {
          this.errorMessage = 'Invalid EmailId or Password';
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid EmailId or Password';
        console.log("D");
      }
    );
  }

  register() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    this.router.navigate(['/login/forgot-password']); 
  }

}
