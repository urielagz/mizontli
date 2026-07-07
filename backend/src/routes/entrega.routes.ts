import { Router } from "express";
import { EntregaController } from "../controllers/EntregaController";

const router = Router();

const controller = new EntregaController();

router.get("/", controller.listar);

router.post("/", controller.entregar);

router.get("/alumno/:idAlumno", controller.buscarPorAlumno);

router.get("/tarea/:idTarea", controller.buscarPorTarea);

router.put("/:id/calificar", controller.calificar);

router.delete("/:id", controller.eliminar);

export default router;