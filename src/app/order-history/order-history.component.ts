import { Component, OnInit } from '@angular/core';
import { PlacedOrderModel } from '../placed-order-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit{

  userId: number;
  orderHistory: PlacedOrderModel[];
  cancelMessage:string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userInfo = this.userService.getUserInfo();
    this.userId = userInfo ? userInfo.userId : 0;

    this.userService.getOrderHistory(this.userId).subscribe(
      (orders: PlacedOrderModel[]) => {
        this.orderHistory = orders;
      },
      error => {
        console.error(error);
        console.log(error);
      }
    );
  }

  cancelOrder(orderId: number): void {
    this.userService.cancelOrder(orderId).subscribe(
      () => {
        this.cancelMessage = 'Order canceled successfully';
        console.log('Order canceled successfully');
        this.loadOrderHistory();
      },
      (error) => {
        alert('Error canceling order: ' + error.error);
      }
    );
  }

  loadOrderHistory(): void {
    this.userService.getOrderHistory(this.userId).subscribe(
      (orders: PlacedOrderModel[]) => {
        this.orderHistory = orders;
      },
      error => {
        console.error(error);
      }
    );
  }

}
