import { Component, OnInit } from '@angular/core';
import { PlacedOrderModel } from '../placed-order-model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit{
  Id: number;
  orderId: number;
  PlacedOrder: PlacedOrderModel;
  
  cancelMessage: string;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.orderId = +this.route.snapshot.paramMap.get('orderId');
    this.getPlacedOrderInfo();
  }

  getPlacedOrderInfo(): void {
    this.userService.getOrderConfirmation(this.orderId)
      .subscribe(
        PlacedOrder => {
          this.PlacedOrder = PlacedOrder;
          console.log(PlacedOrder.Id);
        },
        error => {
          console.error('Error occurred while fetching order information:', error);
        }
      );
  }

  cancelOrder(orderId: number): void {
    this.userService.cancelOrder(orderId).subscribe(
      () => {
        this.cancelMessage = 'Order canceled successfully';
        console.log("order is cancelled");
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Order cannot be cancelled';
        console.log(error);
        this.cancelMessage = '';
      }
    );
  }

  goToFoodMenu() {
    this.router.navigate(['/food-menu']); 
  }

}
