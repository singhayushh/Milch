import { Router } from "express";
import * as orderController from "../controllers/order.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const orderRouter: Router = Router();

orderRouter.post(
    "/create",
    AuthMiddleware(true, false),
    orderController.Create
);

orderRouter.post(
    "/update-status",
    AuthMiddleware(true, false),
    orderController.Update
);

export default orderRouter;