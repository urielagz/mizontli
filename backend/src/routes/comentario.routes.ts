import { Router } from "express";
import { ComentarioController } from "../controllers/ComentarioController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const controller = new ComentarioController();

router.delete("/:id", authMiddleware, controller.eliminar);

export default router;