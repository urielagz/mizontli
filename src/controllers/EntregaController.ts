import { Request, Response } from "express";
import { RepositorioEntregas } from "../repositories/RepositorioEntregas";

const repo = new RepositorioEntregas();

export class EntregaController {

    listar = async (_req: Request, res: Response) => {
        const entregas = await repo.listar();
        res.json({ ok: true, data: entregas });
    };

    entregar = async (req: Request, res: Response) => {

        const {
            idTarea,
            idAlumno,
            comentario,
            archivo
        } = req.body;

        if (!idTarea || !idAlumno || !comentario || !archivo) {
            return res.status(400).json({ ok: false, mensaje: "Datos incompletos" });
        }

        const entrega = await repo.agregar(
            idTarea,
            idAlumno,
            comentario,
            archivo
        );

        res.json({ ok: true, data: entrega });
    };

    buscarPorAlumno = async (req: Request, res: Response) => {
        const data = await repo.buscarPorAlumno(Number(req.params.idAlumno));
        res.json({ ok: true, data });
    };

    buscarPorTarea = async (req: Request, res: Response) => {
        const data = await repo.buscarPorTarea(Number(req.params.idTarea));
        res.json({ ok: true, data });
    };

    calificar = async (req: Request, res: Response) => {

        const { calificacion, observaciones } = req.body;

        const entrega = await repo.calificar(
            Number(req.params.id),
            calificacion,
            observaciones
        );

        if (!entrega) {
            return res.status(404).json({ ok: false, mensaje: "Entrega no encontrada" });
        }

        res.json({ ok: true, data: entrega });
    };

    eliminar = async (req: Request, res: Response) => {
        const ok = await repo.eliminar(Number(req.params.id));
        res.json({ ok, mensaje: ok ? "Entrega eliminada" : "Entrega no encontrada" });
    };

<<<<<<< HEAD
}
=======
}
>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
