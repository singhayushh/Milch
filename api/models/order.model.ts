import { model, Schema, Model } from "mongoose";
import { OrderInterface } from "../dtos/order.dtos";

const OrderSchema: Schema<OrderInterface> = new Schema(
    {
        tracking_id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            // AWAITING_PAYMENT PAYMENT_RECEIVED READY_FOR_DISPATCH DISPATCHED DELIVERED
        },
        address: {
            house_no: {
                type: String,
                required: true,
            },
            street_name: {
                type: String,
                required: true,
            },
            second_line: {
                type: String,
                required: false,
            },
            landmark: {
                type: String,
                required: true,
            },
            pincode: {
                type: Number,
                required: true,
            },
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        items: [
            {
                product_id: {
                    type: Schema.Types.ObjectId,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            }
        ],
    },
    {
        timestamps: true,
    }
);

export const Order: Model<OrderInterface> = model("Order", OrderSchema);