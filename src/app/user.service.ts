import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { FoodModel } from './food-model';
import { ResetPasswordModel } from './reset-password-model';
import { UserModel } from './user-model';
import { CartItemModel } from './cart-item-model';
import { CartModel } from './cart-model';
import { OrderDetailsModel } from './order-details-model';
import { PaymentMode } from './payment-mode';
import { PlacedOrderModel } from './placed-order-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = 'https://localhost:44392/api';
  private loggedIn = false;


  constructor(private http:HttpClient) { }

  login(loginCredentials: UserModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/account/login`, loginCredentials).pipe(
      tap(response => {
        if (response && response.userType) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.loggedIn = true;
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getUserInfo(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  getUserId(): number {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser ? currentUser.userid : null;
  }

  getFoodMenu():Observable<FoodModel[]> {
    return this.http.get<FoodModel[]>(`${this.apiUrl}/admin`);
  }

  register(registrationDetails: UserModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/account/register`, registrationDetails);
  }


  postNewFoodItem(foodModel:FoodModel):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/addfood`,foodModel);
  }

  getFoodItem(foodId: number): Observable<FoodModel> {
    return this.http.get<FoodModel>(`${this.apiUrl}/admin/${foodId}`);
  }

  putUpdatedFoodItem(foodId: number, updatedFoodItem: FoodModel): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/updatefood/${foodId}`, updatedFoodItem);
  }

  deleteFoodItem(foodId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/admin/deletefood/${foodId}`);
  }

  adminResetPassword(resetPassword: ResetPasswordModel): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/account/adminresetpassword`, resetPassword);
  }

  userResetPassword(resetPassword: ResetPasswordModel): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/account/userresetpassword`, resetPassword);
  }

  getFoodByName(searchTerm: string): Observable<FoodModel[]> {
    return this.http.get<FoodModel[]>(`${this.apiUrl}/user/getfooditemsbyname?searchTerm=${searchTerm}`);
  }

  addToCart(userId: number, cartItem: CartItemModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/${userId}/addtocart`, cartItem);
  }

  getCartItems(userId: number): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(`${this.apiUrl}/user/${userId}/cart`);
  }

  updateCartItemQuantity(userId: number, cartId: number, newQuantity: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/user/${userId}/updatequantity/${cartId}`,newQuantity);
  }

  removeCartItem(userId: number, cartId: number): Observable<any> {
    return this.http.delete<string>(`${this.apiUrl}/user/${userId}/removecartitem/${cartId}`);
  }

  getOrderDetails(userId: number): Observable<OrderDetailsModel> {
    return this.http.get<OrderDetailsModel>(`${this.apiUrl}/user/${userId}/getorderdetails`);
  }

  placeOrder(userId: number, paymentMode: string): Observable<any> {
    const orderData = {paymentMode};
    return this.http.post(`${this.apiUrl}/user/${userId}/placeOrder`, orderData);
  }

  processPayment(paymentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/payments/process`, paymentData);
  }

  getOrderHistory(userId: number): Observable<PlacedOrderModel[]> {
    return this.http.get<PlacedOrderModel[]>(`${this.apiUrl}/user/${userId}/getorderhistory`);
  }

  getOrderConfirmation(orderId: number): Observable<PlacedOrderModel> {
    return this.http.get<PlacedOrderModel>(`${this.apiUrl}/user/getplacedorderinfo/${orderId}`);
  }

  cancelOrder(orderId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/cancelorder/${orderId}`);
  }
}

