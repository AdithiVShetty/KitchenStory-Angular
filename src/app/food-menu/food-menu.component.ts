import { Component } from '@angular/core';
import { FoodModel } from '../food-model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CartItemModel } from '../cart-item-model';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {

  userName:string;
  userId:number;
  foodMenu:FoodModel[];
  successMessage: string;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getFoodMenu().subscribe((foods:FoodModel[]) => {
      this.foodMenu = foods;
      console.log(foods);
    });
    const userInfo = this.userService.getUserInfo();
    this.userId = userInfo ? userInfo.userId : 0;
  }

  addToCart(FoodId: number, Quantity: number) {
    
    if (!this.userId) {
      console.error('User ID not available.');
      return;
    }
    const cartItem = { userId: this.userId, FoodId, Quantity };

    this.userService.addToCart(this.userId, cartItem).subscribe(
      (response) => {
        console.log(`FoodItem ${FoodId} added to the cart successfully.`);
        console.log(response);
        this.successMessage = response;
        this.errorMessage = '';

      },
      (error) => {
        console.error('Error adding food item to cart:', error);
        // Handle error as needed
      }
    );
  }

  goToCart() {
    this.router.navigate(['/shopping-cart']); 
  }

}
