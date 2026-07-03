<<<<<<< HEAD
import { Router } from "express";
import { AsesoriaController } from "../controllers/AsesoriaController";

const router = Router();
const controller = new AsesoriaController();

router.get("/", controller.listar);
router.post("/", controller.agregar);
router.delete("/:id", controller.eliminar);

=======
import { Router } from "express";
import { AsesoriaController } from "../controllers/AsesoriaController";

const router = Router();
const controller = new AsesoriaController();

router.get("/", controller.listar);
router.post("/", controller.agregar);
router.delete("/:id", controller.eliminar);

>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
export default router;