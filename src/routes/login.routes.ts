<<<<<<< HEAD
import { Router } from "express";
import { LoginController } from "../controllers/LoginController";

const router = Router();
const controller = new LoginController();

router.post("/", (req, res) => {
    const result = controller.iniciarSesion(
        req.body.correo,
        req.body.contraseña
    );

    res.json(result);
});

=======
import { Router } from "express";
import { LoginController } from "../controllers/LoginController";

const router = Router();
const controller = new LoginController();

router.post("/", (req, res) => {
    const result = controller.iniciarSesion(
        req.body.correo,
        req.body.contraseña
    );

    res.json(result);
});

>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
export default router;