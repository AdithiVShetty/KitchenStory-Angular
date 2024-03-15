import { Component, OnInit } from '@angular/core';
import { OrderDetailsModel } from '../order-details-model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { PaymentMode } from '../payment-mode';
import { PlacedOrderModel } from '../placed-order-model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  userId: number;
  orderId: number;
  orderDetails: OrderDetailsModel;
  placedOrder: PlacedOrderModel;
  paymentMode: string;
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const userInfo = this.userService.getUserInfo();
    this.userId = userInfo ? userInfo.userId : 0;

    this.userService.getOrderDetails(this.userId).subscribe(
      (orderDetails) => {
        this.orderDetails = orderDetails;
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
    this.loadSelectedPaymentMode();
  }

  loadSelectedPaymentMode(): void {
    this.paymentMode = localStorage.getItem('paymentMode') || ''; // Default to 'creditcard' if not found
  }

  saveSelectedPaymentMode(): void {
    localStorage.setItem('paymentMode', this.paymentMode);
  }

  placeOrder(): void {
    console.log("a", this.paymentMode);
    this.userService.placeOrder(this.userId, this.paymentMode)
      .subscribe(
        (orderId: number) => {
          
            console.log('Order placed successfully', orderId);
            this.orderId = orderId;
            this.router.navigate(['/order-placed', orderId]);
            this.errorMessage = '';
        },
        error => {
          console.error('Error occurred while placing order:', error);
          this.errorMessage = 'Your Order is Empty!';
          // Optionally, display an error message to the user
        }
      );

  }

  // proceedToPayment(): void {
  //   // Navigate to the next page along with the selected payment mode as a query parameter
  //   this.router.navigate(['/payment'], { queryParams: { PaymentMode: this.paymentMode } });
  // }

}
