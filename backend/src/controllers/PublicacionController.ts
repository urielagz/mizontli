import { Request, Response } from "express";
import { repos } from "../repositories";

const repo = repos.publicaciones;

export class PublicacionController {

    // POST /publicaciones
    crear = async (req: Request, res: Response) => {
        const usuarioToken = (req as any).usuario;
        const { titulo, contenido, tipo, id_materia } = req.body;

        if (!titulo) {
            return res.status(400).json({ ok: false, mensaje: "El título es obligatorio" });
        }

        const tiposValidos = ["pregunta", "recurso", "general"];
        const tipoFinal = tiposValidos.includes(tipo) ? tipo : "general";

        const publicacion = await repo.crear(
            titulo,
            contenido,
            usuarioToken.id_usuario || usuarioToken.id,
            tipoFinal,
            id_materia
        );

        res.json({ ok: true, data: publicacion });
    };

    // GET /publicaciones?materia=1&tipo=pregunta
    listar = async (req: Request, res: Response) => {
        const id_materia = req.query.materia ? Number(req.query.materia) : undefined;
        const tipo = req.query.tipo as string | undefined;

        const publicaciones = await repo.listarGlobal(id_materia, tipo);
        res.json({ ok: true, data: publicaciones });
    };

    // GET /publicaciones/:id
    buscarPorId = async (req: Request, res: Response) => {
        const publicacion = await repo.buscarPorId(Number(req.params.id));

        if (!publicacion) {
            return res.status(404).json({ ok: false, mensaje: "Publicación no encontrada" });
        }

        res.json({ ok: true, data: publicacion });
    };

    // DELETE /publicaciones/:id  (autor o admin)
    eliminar = async (req: Request, res: Response) => {
        const usuarioToken = (req as any).usuario;
        const publicacion = await repo.buscarPorId(Number(req.params.id));

        if (!publicacion) {
            return res.status(404).json({ ok: false, mensaje: "Publicación no encontrada" });
        }

        const esAutor = publicacion.id_usuario === (usuarioToken.id_usuario || usuarioToken.id);
        const esAdmin = usuarioToken.rol === "admin";

        if (!esAutor && !esAdmin) {
            return res.status(403).json({ ok: false, mensaje: "No puedes eliminar esta publicación" });
        }

        await repo.eliminar(Number(req.params.id));
        res.json({ ok: true, mensaje: "Publicación eliminada" });
    };
}