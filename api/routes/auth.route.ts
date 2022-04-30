import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const userRouter: Router = Router();

userRouter.post(
    "/register",
    AuthMiddleware(false, true),
    userController.Register
);

userRouter.post(
    "/login",
    AuthMiddleware(false, true),
    userController.Login
);

userRouter.post(
    "/update",
    AuthMiddleware(false, false),
    userController.Update
);

userRouter.post(
    "/change-password",
    AuthMiddleware(false, false),
    userController.ChangePassword
);

userRouter.post(
    "/forgot-password",
    userController.ForgotPassword
);

userRouter.post(
    "/reset-password",
    userController.ResetPasswordPost
);

userRouter.get(
    "/reset-password/:reset_token",
    userController.ResetPasswordGet
);

userRouter.get(
    "/verify-account/:token",
    userController.Verify
);

export default userRouter;