import { Request, Response } from "express";
import { repos } from "../repositories";

const repo = repos.comentarios;
const repoPublicaciones = repos.publicaciones;

export class ComentarioController {

    // POST /publicaciones/:id/comentarios
    crear = async (req: Request, res: Response) => {
        const usuarioToken = (req as any).usuario;
        const { contenido } = req.body;
        const id_publicacion = Number(req.params.id);

        if (!contenido) {
            return res.status(400).json({ ok: false, mensaje: "El comentario no puede estar vacío" });
        }

        const publicacion = await repoPublicaciones.buscarPorId(id_publicacion);
        if (!publicacion) {
            return res.status(404).json({ ok: false, mensaje: "Publicación no encontrada" });
        }

        const comentario = await repo.crear(
            contenido,
            usuarioToken.id_usuario || usuarioToken.id,
            id_publicacion
        );

        res.json({ ok: true, data: comentario });
    };

    // GET /publicaciones/:id/comentarios
    listar = async (req: Request, res: Response) => {
        const comentarios = await repo.listarPorPublicacion(Number(req.params.id));
        res.json({ ok: true, data: comentarios });
    };

    // DELETE /comentarios/:id
    eliminar = async (req: Request, res: Response) => {
        const ok = await repo.eliminar(Number(req.params.id));
        res.json({ ok, mensaje: ok ? "Comentario eliminado" : "No encontrado" });
    };
}