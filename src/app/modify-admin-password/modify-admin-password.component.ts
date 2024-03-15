import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-admin-password',
  templateUrl: './modify-admin-password.component.html',
  styleUrls: ['./modify-admin-password.component.css']
})
export class ModifyAdminPasswordComponent {

  resetPasswordData: any = {};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resetPassword(): void {
    this.userService.adminResetPassword(this.resetPasswordData)
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
