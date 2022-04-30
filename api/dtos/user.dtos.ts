import { Document, Schema } from "mongoose";

export interface Address {
    house_no: String;
    street_name: String;
    second_line?: String;
    landmark: String;
    pincode: Number;
}

export interface UserInterface extends Document {
    name: String;
    email: String;
    password: String;
    phone?: String;
    address: Address;
    profile_picture?: String;
    type: String;
    permission_level: Number;
    token?: String;
    is_verified: Boolean;
}

export interface CreateUserDto {
    name: String;
    email: String;
    password: String;
    phone?: String;
    address: Address;
}

export interface UpdateUserDto {
    name?: String | null;
    phone?: String | null;
    profile_picture?: String | null;
    permission_level?: Number;
    token?: String | null;
    is_verified?: Boolean;
    address?: Address;
}

export interface MailDto {
    to: String;
    from: String;
    subject: String;
    html: String;
}