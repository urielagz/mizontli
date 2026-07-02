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

export default router;