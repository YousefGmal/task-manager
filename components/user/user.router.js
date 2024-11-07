import express from "express";
import { loginSchema, signupSchema } from "./user.validation.js";
import { login, signup } from "./user.controller.js";
import { validateBody } from "../../middlewares/validate.middleware.js";

const router = express.Router();

const version = "api/v1";
router.route(`/${version}/signup`).post(validateBody(signupSchema), signup);
router.route(`/${version}/login`).post(validateBody(loginSchema), login);

export default router;
