import { model, Schema, Model } from "mongoose";
import { UserInterface } from "../dtos/user.dtos";
import { genSaltSync, hashSync } from "bcryptjs";

const UserSchema: Schema<UserInterface> = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: false,
        },
        profile_picture: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            required: true,
        },
        permission_level: {
            type: Number,
            default: 0,
        },
        token: {
            type: String,
            required: true,
        },
        is_verified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.pre("save", function (next) {
    if (!this.isModified("password") || !this.isNew) {
        next();
    } else this.isModified("password");

    if (this.isModified("password") && this.password) {
        const salt = genSaltSync(10);
        this.password = hashSync(this.password.toString(), salt);
    }
    next();
});

export const User: Model<UserInterface> = model("User", UserSchema);