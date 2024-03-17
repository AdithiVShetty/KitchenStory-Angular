import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  totalAmount: number;
  paymentMode: string;
  cardNumber: string;
  debitCardNumber: string;
  upiId: string;
  successMessage: string = '';
  errorMessage: string = '';
  userId: number;
  orderId: number;

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const userInfo = this.userService.getUserInfo();
    this.userId = userInfo ? userInfo.userId : 0;

    this.route.queryParams.subscribe(params => {
      this.totalAmount = params['totalAmount'];
      this.paymentMode = params['PaymentMode'];
    });
  }

  onSubmit(): void {
    if (this.paymentMode === 'UPI') {
      if (this.upiId) {
        this.successMessage = 'Payment successful';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Payment failed. Please enter a valid UPI ID.';
        this.successMessage = '';
      }
    } 
    else if (this.paymentMode === 'Credit Card') {
      console.log(this.cardNumber);
      if (this.cardNumber && this.cardNumber.length == 16) {
        this.successMessage = 'Payment successful';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Payment failed. Please enter a valid card number.';
        this.successMessage = '';
      }
    } 
    else if (this.paymentMode === 'Debit Card') {
      if (this.debitCardNumber && this.debitCardNumber.length === 16) {
        this.successMessage = 'Payment successful';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Payment failed. Please enter a valid card number.';
        this.successMessage = '';
      }
    } 
    else {
      console.warn('Invalid payment mode.');
    }
    setTimeout(() => {
      this.successMessage = 'Payment successful';
    }, 5000);
  }

  checkout() {
    this.router.navigate(['/checkout']); 
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
}