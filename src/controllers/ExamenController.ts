import { Request, Response } from "express";
import { RepositorioExamenes } from "../repositories/RepositorioExamenes";

const repo = new RepositorioExamenes();

export class ExamenController {

    listar = async (_req: Request, res: Response) => {
        const examenes = await repo.listar();
        res.json({ ok: true, data: examenes });
    };

    agregar = async (req: Request, res: Response) => {
        const { titulo, tiempo, materia } = req.body;

        if (!titulo || tiempo === undefined || !materia) {
            return res.status(400).json({ ok: false, mensaje: "Datos incompletos" });
        }

        const examen = await repo.agregar(titulo, tiempo, materia);

        res.json({ ok: true, data: examen });
    };

    buscarPorMateria = async (req: Request, res: Response) => {
        const data = await repo.buscarPorMateria(Number(req.params.idMateria));
        res.json({ ok: true, data });
    };

    buscarPorId = async (req: Request, res: Response) => {
        const examen = await repo.buscarPorId(Number(req.params.id));

        if (!examen) {
            return res.status(404).json({ ok: false, mensaje: "No encontrado" });
        }

        res.json({ ok: true, data: examen });
    };

    eliminar = async (req: Request, res: Response) => {
        const ok = await repo.eliminar(Number(req.params.id));
        res.json({ ok, mensaje: ok ? "Eliminado" : "No encontrado" });
    };
}
