import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authorizationMiddleware } from "../middlewares/authorization.middleware";
import { scoreController } from "../controllers/score.controller";

const router = Router();

router.get("/:rut", authMiddleware, authorizationMiddleware, scoreController);

export default router;
