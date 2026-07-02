import { Request, Response } from "express";
import { RepositorioTemas } from "../repositories/RepositorioTemas";

const repo = new RepositorioTemas();

export class TemaController {

    listar = async (_req: Request, res: Response) => {
        const temas = await repo.listar();
        res.json({ ok: true, data: temas });
    };

    agregar = async (req: Request, res: Response) => {
        const { nombre, descripcion, orden, id_materia } = req.body;

        if (!nombre || !descripcion || orden === undefined || !id_materia) {
            return res.status(400).json({ ok: false, mensaje: "Datos incompletos" });
        }

        const tema = await repo.agregar(nombre, descripcion, orden, id_materia);

        res.json({ ok: true, data: tema });
    };

    buscarPorMateria = async (req: Request, res: Response) => {
        const data = await repo.buscarPorMateria(Number(req.params.idMateria));
        res.json({ ok: true, data });
    };

    eliminar = async (req: Request, res: Response) => {
        const ok = await repo.eliminar(Number(req.params.id));
        res.json({ ok, mensaje: ok ? "Eliminado" : "No encontrado" });
    };
}