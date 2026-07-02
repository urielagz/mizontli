import { Router } from "express";
import { TemaController } from "../controllers/TemaController";

const router = Router();
const controller = new TemaController();

router.get("/", controller.listar);
router.post("/", controller.agregar);
router.get("/materia/:idMateria", controller.buscarPorMateria);
router.delete("/:id", controller.eliminar);

export default router;