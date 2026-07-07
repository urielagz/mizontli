import { Router } from "express";
import { TareaController } from "../controllers/TareaController";

const router = Router();
const controller = new TareaController();

router.get("/", controller.listar);
router.post("/", controller.agregar);
router.get("/materia/:idMateria", controller.buscarPorMateria);
router.delete("/:id", controller.eliminar);



export default router;