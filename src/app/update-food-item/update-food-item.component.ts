import { Component, OnInit } from '@angular/core';
import { FoodModel } from '../food-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-food-item.component.html',
  styleUrls: ['./update-food-item.component.css']
})
export class UpdateFoodItemComponent implements OnInit{

  foodId:number;
  foodItem:FoodModel;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService, 
    private router: Router, 
    ) {
    }

  ngOnInit(): void {
    this.foodId = +this.route.snapshot.paramMap.get('id');
    this.userService.getFoodItem(this.foodId).subscribe(data => {
      this.foodItem = data;
    });
  }

  updateFoodItem(): void{
    this.userService.putUpdatedFoodItem(this.foodId, this.foodItem).subscribe(
      (response) => {
        console.log(response);
        this.successMessage = response;
        this.errorMessage = "";
      },
      (error) => {
        console.error(error);
        this.errorMessage = error;
        this.successMessage = "";
      }
    );
  }

  goBackToMenu() {
    this.router.navigate(['/master-food-menu']); 
  }
}