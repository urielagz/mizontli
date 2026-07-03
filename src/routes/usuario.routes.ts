<<<<<<< HEAD
import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const controller = new UsuarioController();

router.get("/", controller.listar);
router.post("/", controller.registrar);
router.post("/login", controller.login);
router.put("/cambiar-password",authMiddleware,controller.cambiarContraseña
);

// PERFIL
router.put(
    "/perfil",
    authMiddleware,
    controller.actualizarPerfil
);

// RUTAS CON ID
router.get("/:id", controller.buscarPorId);
router.delete("/:id", controller.eliminar);
router.post(
    "/forgot-password",
    controller.forgotPassword
);

router.post(
    "/reset-password",
    controller.resetPassword
);


=======
import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const controller = new UsuarioController();

router.get("/", controller.listar);
router.post("/", controller.registrar);
router.post("/login", controller.login);
router.put("/cambiar-password",authMiddleware,controller.cambiarContraseña
);

// PERFIL
router.put(
    "/perfil",
    authMiddleware,
    controller.actualizarPerfil
);

// RUTAS CON ID
router.get("/:id", controller.buscarPorId);
router.delete("/:id", controller.eliminar);
router.post(
    "/forgot-password",
    controller.forgotPassword
);

router.post(
    "/reset-password",
    controller.resetPassword
);


>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
export default router;