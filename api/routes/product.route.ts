import { Router } from "express";
import * as productController from "../controllers/product.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const productRouter: Router = Router();

productRouter.post(
    "/create",
    AuthMiddleware(true, false),
    productController.Create
);

productRouter.post(
    "/edit/:id",
    AuthMiddleware(true, false),
    productController.Edit
);

productRouter.get(
    "/delete/:id",
    AuthMiddleware(true, false),
    productController.Delete
);

export default productRouter;