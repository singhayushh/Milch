import { Document, Schema } from "mongoose";
import { Address } from "./user.dtos";

export interface OrderItemInterface {
    product_id: Schema.Types.ObjectId;
    name: String;
    price: Number;
    quantity: Number;
}

export interface OrderInterface extends Document {
    tracking_id: String;
    status: String;
    address: Address;
    user: Schema.Types.ObjectId;
    items: Array<OrderItemInterface>;
}

export interface UpdateOrderInterface {
    status: String;
}