import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  resetPasswordData: any = {};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resetPassword(): void {
    this.userService.userResetPassword(this.resetPasswordData)
      .subscribe(
        response => {
          this.successMessage = response;
          this.errorMessage = '';
          console.log(response);
        },
        error => {
          this.errorMessage = "Password Reset Failed!";
          this.successMessage = '';
          console.log(error);
        }
      );
  }

  goToLogin() {
    this.router.navigate(['/login']); 
  }
}
