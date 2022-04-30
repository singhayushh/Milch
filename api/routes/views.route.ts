import { Router } from "express";
import * as viewsController from "../controllers/views.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const viewsRouter: Router = Router();

viewsRouter.get(
    "/",
    AuthMiddleware(false, true),
    viewsController.Home
);

viewsRouter.get(
    "/about",
    AuthMiddleware(false, true),
    viewsController.About
);

viewsRouter.get(
    "/shop",
    AuthMiddleware(false, true),
    viewsController.Shop
);

viewsRouter.get(
    "/contact",
    AuthMiddleware(false, true),
    viewsController.Contact
);

viewsRouter.get(
    "/item/:product_id",
    AuthMiddleware(false, true),
    viewsController.Product
);

viewsRouter.get(
    "/order/:order_id",
    AuthMiddleware(false, false),
    viewsController.Order
);

viewsRouter.get(
    "/ordes",
    AuthMiddleware(true, false),
    viewsController.Orders
);

export default viewsRouter;