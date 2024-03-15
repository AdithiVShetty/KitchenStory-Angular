import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartModel } from '../cart-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  userId:number;
  cartItems: CartModel[];
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit(): void {
    const userInfo = this.userService.getUserInfo();
    this.userId = userInfo ? userInfo.userId : 0;

    this.userService.getCartItems(this.userId).subscribe(
      (cartItems) => {
        this.cartItems = cartItems;
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  updateQuantity(cartId: number, newQuantity: number) {
    const userId = this.userId;

    this.userService.updateCartItemQuantity(userId, cartId, newQuantity).subscribe(
      () => {
        console.log(`Cart item ${cartId} quantity updated successfully.`);
        this.reloadCartItems();
      },
      (error) => {
        console.error('Error updating cart item quantity:', error);
        if (error.error && error.error.message) {
          console.error('Server Error:', error.error.message);
        }
      }
    );
  }

  removeCartItem(cartId: number) {
    const userId = this.userId; 

    this.userService.removeCartItem(userId, cartId).subscribe(
      (message) => {
        console.log(message);
        this.reloadCartItems();
      },
      (error) => {
        console.error('Error removing cart item:', error);
      }
    );
  }

  private reloadCartItems() {
    this.userService.getCartItems(this.userId).subscribe(
      (cartItems) => {
        this.cartItems = cartItems;
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  checkout() {
    if(this.cartItems.length == 0)
    {
      this.errorMessage = 'Cart is Empty';
    }
    else{
      this.router.navigate(['/checkout']); 
    }
    
  }

}
