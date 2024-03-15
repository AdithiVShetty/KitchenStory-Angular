import { Component } from '@angular/core';
import { UserModel } from '../user-model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FoodModel } from '../food-model';

@Component({
  selector: 'app-master-food-menu',
  templateUrl: './master-food-menu.component.html',
  styleUrls: ['./master-food-menu.component.css']
})
export class MasterFoodMenuComponent {

  foodMenu:FoodModel[];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getFoodMenu().subscribe((foods:FoodModel[]) => {
      this.foodMenu = foods;
      console.log(foods);
    })
  }

  goToUpdatePage(foodId: number): void {
    this.router.navigate(['/update-food', foodId]);
  }

  goToDeletePage(foodId: number): void {
    this.router.navigate(['/delete-food', foodId]);
  }

}
