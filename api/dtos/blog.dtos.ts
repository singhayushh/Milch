import { Document } from "mongoose";

export interface BlogInterface extends Document {
    title: String;
    path: String;
    picture: String;
    content: String;
}

export interface CreateBlogDto {
    name: String;
    path: String;
    picture: String;
    content: String;
}

export interface UpdateBlogDto {
    name?: String;
    path?: String;
    picture?: String;
    content?: String;
}