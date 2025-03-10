import { Router } from "express"
import authController from "@/network/controllers/auth.controller"
import authValidation from "@/validators/auth.validation";

const router = Router();

router.get("/session-token", authController.SessionToken);
router.get("/session-logout", authController.SessionLogout);
router.post("/signup", authValidation.SignupSchema, authController.Signup);
router.post("/login", authValidation.LoginSchema, authController.Login);
router.get("/start", authController.start);

export default router;
