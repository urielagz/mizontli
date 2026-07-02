import { pool } from "../config/database";
import { Tarea } from "../models/Tarea";

export class RepositorioTareas {

    private mapFilaAFila(row: any): Tarea {
        return new Tarea(
            row.id_actividad,
            row.titulo,
            row.descripcion,
            row.fecha_entrega,
            row.calificacion ?? 0,
            row.id_materia
        );
    }

    async listar(): Promise<Tarea[]> {
        const resultado = await pool.query(
            `SELECT a.id_actividad,
                    a.titulo,
                    a.descripcion,
                    a.fecha_entrega,
                    t.id_materia
             FROM actividad a
             JOIN tema t ON a.id_tema = t.id_tema`
        );

        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async agregar(
        titulo: string,
        descripcion: string,
        fecha_entrega: Date,
        calificacion: number,
        id_materia: number
    ): Promise<Tarea> {
        const temaResult = await pool.query(
            "SELECT id_tema FROM tema WHERE id_materia = $1 LIMIT 1",
            [id_materia]
        );

        if (temaResult.rows.length === 0) {
            throw new Error("No existe un tema para la materia proporcionada");
        }

        const id_tema = temaResult.rows[0].id_tema;

        const resultado = await pool.query(
            `INSERT INTO actividad
             (titulo, descripcion, fecha_entrega, id_tema)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [titulo, descripcion, fecha_entrega, id_tema]
        );

        const fila = resultado.rows[0];
        fila.id_materia = id_materia;
        fila.calificacion = calificacion;

        return this.mapFilaAFila(fila);
    }

    async buscarPorMateria(idMateria: number): Promise<Tarea[]> {
        const resultado = await pool.query(
            `SELECT a.id_actividad,
                    a.titulo,
                    a.descripcion,
                    a.fecha_entrega,
                    t.id_materia
             FROM actividad a
             JOIN tema t ON a.id_tema = t.id_tema
             WHERE t.id_materia = $1`,
            [idMateria]
        );

        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async buscarPorId(id_tarea: number): Promise<Tarea | undefined> {
        const resultado = await pool.query(
            `SELECT a.id_actividad,
                    a.titulo,
                    a.descripcion,
                    a.fecha_entrega,
                    t.id_materia
             FROM actividad a
             JOIN tema t ON a.id_tema = t.id_tema
             WHERE a.id_actividad = $1`,
            [id_tarea]
        );

        if (resultado.rows.length === 0) {
            return undefined;
        }

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async eliminar(id_tarea: number): Promise<boolean> {
        const resultado = await pool.query(
            "DELETE FROM actividad WHERE id_actividad = $1",
            [id_tarea]
        );

        return resultado.rowCount > 0;
    }

}
