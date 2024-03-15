import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterFoodMenuComponent } from './master-food-menu/master-food-menu.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component';
import { DeleteFoodItemComponent } from './delete-food-item/delete-food-item.component';
import { ModifyAdminPasswordComponent } from './modify-admin-password/modify-admin-password.component';
import { ErrorComponent } from './error/error.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterFoodMenuComponent,
    AddNewFoodComponent,
    UpdateFoodItemComponent,
    DeleteFoodItemComponent,
    ModifyAdminPasswordComponent,
    ErrorComponent,
    AdminNavbarComponent,
    LoginComponent,
    UserRegistrationComponent,
    ForgotPasswordComponent,
    UserDashboardComponent,
    FoodMenuComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    UserNavbarComponent,
    LogoutComponent,
    UserLogoutComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
