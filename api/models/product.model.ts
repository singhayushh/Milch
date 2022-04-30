import { model, Schema, Model } from "mongoose";
import { ProductInterface } from "../dtos/product.dtos";

const ProductSchema: Schema<ProductInterface> = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        dealer_price: {
            type: Number,
            required: false,
        },
        customer_price: {
            type: Number,
            required: true,
        },
        original_price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Product: Model<ProductInterface> = model("Product", ProductSchema);