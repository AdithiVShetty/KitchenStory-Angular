import { Component } from '@angular/core';
import { UserModel } from '../user-model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  newCustomer:UserModel = new UserModel();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

 register(){
    
    this.userService.register(this.newCustomer).subscribe(
    (response) => {
      this.successMessage = response;
      this.errorMessage = '';
        console.log(response);
      },
      (error) => {
        if (error.error.ExceptionMessage) {
          this.errorMessage = error.error.ExceptionMessage;
        }
        else if (error.error && error.error.Message) {
          this.errorMessage = error.error.Message;
        }
        else {
          this.errorMessage = 'Invalid data';
        }
        this.successMessage = '';
        console.error(error);
      }       
    );
  }

  goToLogin() {
    this.router.navigate(['/login']); 
  }

}
