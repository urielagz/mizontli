import { Router } from "express";
import { MateriaController } from "../controllers/MateriaController";

import { authMiddleware } from "../middlewares/authMiddleware";
import { permitirRoles } from "../middlewares/rolesMiddleware";

const router = Router();
const controller = new MateriaController();

router.get("/", controller.listar);

router.post(
    "/",
    authMiddleware,
    permitirRoles("ADMIN", "DOCENTE"),
    controller.agregar
);

router.get("/:id", controller.buscarPorId);
router.delete("/:id", controller.eliminar);

export default router;