import { Request, Response } from "express";
import { RepositorioMateria } from "../repositories/RepositorioMateria";

const repo = new RepositorioMateria();

export class MateriaController {

    listar = async (_req: Request, res: Response) => {
        const materias = await repo.listar();
        res.json({ ok: true, data: materias });
    };

    agregar = async (req: Request, res: Response) => {
        const { nombre, descripcion, icono, nivel_educativo } = req.body;

        if (!nombre || !descripcion || !icono || !nivel_educativo) {
            return res.status(400).json({ ok: false, mensaje: "Datos incompletos" });
        }

        const materia = await repo.agregar(nombre, descripcion, icono, nivel_educativo);

        res.json({ ok: true, data: materia });
    };

    buscarPorId = async (req: Request, res: Response) => {
        const materia = await repo.buscarPorId(Number(req.params.id));

        if (!materia) {
            return res.status(404).json({ ok: false, mensaje: "No encontrada" });
        }

        res.json({ ok: true, data: materia });
    };

    eliminar = async (req: Request, res: Response) => {
        const ok = await repo.eliminar(Number(req.params.id));

        res.json({ ok, mensaje: ok ? "Eliminada" : "No encontrada" });
    };
}