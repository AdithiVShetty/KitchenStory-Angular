import { Component } from '@angular/core';
import { FoodModel } from '../food-model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css']
})
export class AddNewFoodComponent {

  newFoodItem:FoodModel = new FoodModel();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  addNewFoodItem(){
    
      this.userService.postNewFoodItem(this.newFoodItem).subscribe(
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

    goBackToMenu() {
      this.router.navigate(['/master-food-menu']); 
    }
}
