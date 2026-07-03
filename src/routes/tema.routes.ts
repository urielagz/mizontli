<<<<<<< HEAD
import { Router } from "express";
import { TemaController } from "../controllers/TemaController";

const router = Router();
const controller = new TemaController();

router.get("/", controller.listar);
router.post("/", controller.agregar);
router.get("/materia/:idMateria", controller.buscarPorMateria);
router.delete("/:id", controller.eliminar);

=======
import { Router } from "express";
import { TemaController } from "../controllers/TemaController";

const router = Router();
const controller = new TemaController();

router.get("/", controller.listar);
router.post("/", controller.agregar);
router.get("/materia/:idMateria", controller.buscarPorMateria);
router.delete("/:id", controller.eliminar);

>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
export default router;