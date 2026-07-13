import { pool } from "../config/database";

export class RepositorioComentarios {

    async crear(contenido: string, id_usuario: number, id_publicacion: number) {
        const resultado = await pool.query(
            `INSERT INTO Comentario (contenido, id_usuario, id_publicacion)
             VALUES ($1, $2, $3) RETURNING *`,
            [contenido, id_usuario, id_publicacion]
        );
        return resultado.rows[0];
    }

    // Comentarios de docentes primero (destacados), luego el resto por fecha
    async listarPorPublicacion(id_publicacion: number) {
        const resultado = await pool.query(
            `SELECT c.*, u.nombre, u.apellido, u.rol,
                    (u.rol = 'docente') AS destacado
             FROM Comentario c
             JOIN Usuario u ON u.id_usuario = c.id_usuario
             WHERE c.id_publicacion = $1
             ORDER BY (u.rol = 'docente') DESC, c.fecha_comentario ASC`,
            [id_publicacion]
        );
        return resultado.rows;
    }

    async eliminar(id_comentario: number): Promise<boolean> {
        const resultado = await pool.query("DELETE FROM Comentario WHERE id_comentario = $1", [id_comentario]);
        return (resultado.rowCount ?? 0) > 0;
    }
}