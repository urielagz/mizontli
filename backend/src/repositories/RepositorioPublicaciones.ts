import { pool } from "../config/database";
import { Publicacion } from "../models/Publicacion";

export class RepositorioPublicaciones {

    private mapFila(row: any): Publicacion {
        return new Publicacion(
            row.id_publicacion,
            row.titulo,
            row.id_usuario,
            row.tipo,
            row.contenido,
            row.id_materia,
            row.fecha_publicacion
        );
    }

    async crear(titulo: string, contenido: string, id_usuario: number, tipo: string, id_materia?: number): Promise<Publicacion> {
        const resultado = await pool.query(
            `INSERT INTO Publicacion (titulo, contenido, id_usuario, tipo, id_materia)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [titulo, contenido, id_usuario, tipo, id_materia ?? null]
        );
        return this.mapFila(resultado.rows[0]);
    }

    // Chat global, con filtros opcionales de materia y tipo
    async listarGlobal(id_materia?: number, tipo?: string): Promise<any[]> {
        const condiciones: string[] = [];
        const valores: any[] = [];
        let index = 1;

        if (id_materia) { condiciones.push(`p.id_materia = $${index++}`); valores.push(id_materia); }
        if (tipo) { condiciones.push(`p.tipo = $${index++}`); valores.push(tipo); }

        const where = condiciones.length > 0 ? `WHERE ${condiciones.join(" AND ")}` : "";

        const resultado = await pool.query(
            `SELECT p.*, u.nombre, u.apellido, u.rol, m.nombre AS nombre_materia
             FROM Publicacion p
             JOIN Usuario u ON u.id_usuario = p.id_usuario
             LEFT JOIN Materia m ON m.id_materia = p.id_materia
             ${where}
             ORDER BY p.fecha_publicacion DESC`,
            valores
        );
        return resultado.rows;
    }

    async buscarPorId(id_publicacion: number): Promise<any | undefined> {
        const resultado = await pool.query(
            `SELECT p.*, u.nombre, u.apellido, u.rol
             FROM Publicacion p
             JOIN Usuario u ON u.id_usuario = p.id_usuario
             WHERE p.id_publicacion = $1`,
            [id_publicacion]
        );
        return resultado.rows[0];
    }

    async eliminar(id_publicacion: number): Promise<boolean> {
        const resultado = await pool.query("DELETE FROM Publicacion WHERE id_publicacion = $1", [id_publicacion]);
        return (resultado.rowCount ?? 0) > 0;
    }
}