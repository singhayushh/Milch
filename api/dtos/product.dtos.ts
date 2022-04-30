import { Document } from "mongoose";

export interface ProductInterface extends Document {
    name: String;
    path: String;
    picture: String;
    content: String;
    dealer_price?: Number;
    customer_price: Number;
    original_price: Number;
}

export interface CreateProductDto {
    name: String;
    path: String;
    picture: String;
    content: String;
    dealer_price?: Number;
    customer_price: Number;
    original_price: Number;
}

export interface UpdateProductDto {
    name?: String;
    path?: String;
    picture?: String;
    content?: String;
    dealer_price?: Number;
    customer_price?: Number;
    original_price?: Number;
}