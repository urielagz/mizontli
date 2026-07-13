import { Router } from "express";
import { PublicacionController } from "../controllers/PublicacionController";
import { ComentarioController } from "../controllers/ComentarioController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const controller = new PublicacionController();
const comentarioController = new ComentarioController();

router.post("/", authMiddleware, controller.crear);
router.get("/", authMiddleware, controller.listar);
router.get("/:id", authMiddleware, controller.buscarPorId);
router.delete("/:id", authMiddleware, controller.eliminar);

router.post("/:id/comentarios", authMiddleware, comentarioController.crear);
router.get("/:id/comentarios", authMiddleware, comentarioController.listar);

export default router;