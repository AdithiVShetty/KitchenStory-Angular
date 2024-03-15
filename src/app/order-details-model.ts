import { PaymentMode } from "./payment-mode";

export class OrderDetailsModel {

    CartItems: CartModel[];
    TotalAmount: number;
    UserDetails: UserModel;
    PaymentMode: PaymentMode[];
    SelectedPaymentMode: PaymentMode;
}

export interface CartModel {
    Id: number;
    FoodId: number;
    FoodName: string;
    Quantity: number;
    CartPrice: number;
}

export interface UserModel {
    FullName: string;
    EmailId: string;
    ContactNo: string;
    Address: string;
}