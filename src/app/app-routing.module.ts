import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterFoodMenuComponent } from './master-food-menu/master-food-menu.component';
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component';
import { DeleteFoodItemComponent } from './delete-food-item/delete-food-item.component';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';
import { ErrorComponent } from './error/error.component';
import { ModifyAdminPasswordComponent } from './modify-admin-password/modify-admin-password.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderHistoryComponent } from './order-history/order-history.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegistrationComponent},
  { path: 'login/forgot-password', component: ForgotPasswordComponent},
  { path: 'master-food-menu', component: MasterFoodMenuComponent, canActivate: [AuthGuard]},
  { path: 'update-food/:id', component: UpdateFoodItemComponent, canActivate: [AuthGuard]},
  { path: 'delete-food/:id', component: DeleteFoodItemComponent, canActivate: [AuthGuard]},
  { path: 'master-food-menu/add-food', component: AddNewFoodComponent, canActivate: [AuthGuard]},
  { path: 'admin/modify-password', component: ModifyAdminPasswordComponent, canActivate: [AuthGuard]},
  { path: 'home', component: UserDashboardComponent, canActivate: [AuthGuard]},
  { path: 'food-menu', component: FoodMenuComponent, canActivate: [AuthGuard]},
  { path: 'shopping-cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  { path: 'orders', component: OrderHistoryComponent, canActivate: [AuthGuard]},
  { path: 'order-placed/:orderId', component: OrderConfirmationComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent},
  { path: 'user/logout', component: UserLogoutComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
