<<<<<<< HEAD
import { Request, Response } from "express";
import { RepositorioTareas } from "../repositories/RepositorioTareas";

const repo = new RepositorioTareas();

export class TareaController {

    listar = async (_req: Request, res: Response) => {
        const tareas = await repo.listar();
        res.json({ ok: true, data: tareas });
    };

    agregar = async (req: Request, res: Response) => {
        const { titulo, descripcion, fechaEntrega, calificacion, id_materia } = req.body;

        if (!titulo || !descripcion || !fechaEntrega || calificacion === undefined || !id_materia) {
            return res.status(400).json({ ok: false, mensaje: "Datos incompletos" });
        }

        const tarea = await repo.agregar(
            titulo,
            descripcion,
            new Date(fechaEntrega),
            calificacion,
            id_materia
        );

        res.json({ ok: true, data: tarea });
    };

    buscarPorMateria = async (req: Request, res: Response) => {
        const data = await repo.buscarPorMateria(Number(req.params.idMateria));
        res.json({ ok: true, data });
    };

    eliminar = async (req: Request, res: Response) => {
        const ok = await repo.eliminar(Number(req.params.id));
        res.json({ ok, mensaje: ok ? "Eliminada" : "No encontrada" });
    };
=======
import { Request, Response } from "express";
import { RepositorioTareas } from "../repositories/RepositorioTareas";

const repo = new RepositorioTareas();

export class TareaController {

    listar = async (_req: Request, res: Response) => {
        const tareas = await repo.listar();
        res.json({ ok: true, data: tareas });
    };

    agregar = async (req: Request, res: Response) => {
        const { titulo, descripcion, fechaEntrega, calificacion, id_materia } = req.body;

        if (!titulo || !descripcion || !fechaEntrega || calificacion === undefined || !id_materia) {
            return res.status(400).json({ ok: false, mensaje: "Datos incompletos" });
        }

        const tarea = await repo.agregar(
            titulo,
            descripcion,
            new Date(fechaEntrega),
            calificacion,
            id_materia
        );

        res.json({ ok: true, data: tarea });
    };

    buscarPorMateria = async (req: Request, res: Response) => {
        const data = await repo.buscarPorMateria(Number(req.params.idMateria));
        res.json({ ok: true, data });
    };

    eliminar = async (req: Request, res: Response) => {
        const ok = await repo.eliminar(Number(req.params.id));
        res.json({ ok, mensaje: ok ? "Eliminada" : "No encontrada" });
    };
>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
}