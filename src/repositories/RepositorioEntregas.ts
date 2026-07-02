import { pool } from "../config/database";
import { EntregaTarea } from "../models/EntregaTarea";

export class RepositorioEntregas {

    private mapFilaAFila(row: any): EntregaTarea {
        const observaciones = row.observaciones ?? "";
        const estado = row.calificacion !== null ? "CALIFICADA" : "PENDIENTE";

        return new EntregaTarea(
            row.id_registro,
            row.id_actividad,
            row.id_usuario,
            observaciones,
            "",
            row.fecha_entrega,
            estado,
            row.calificacion,
            observaciones
        );
    }

    async listar(): Promise<EntregaTarea[]> {
        const resultado = await pool.query("SELECT * FROM actividad_completada");
        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async agregar(
        id_tarea: number,
        id_alumno: number,
        comentario: string,
        archivo: string
    ): Promise<EntregaTarea> {
        const fecha_entrega = new Date();
        const observaciones = archivo
            ? `${comentario} | ARCHIVO: ${archivo}`
            : comentario;

        const resultado = await pool.query(
            `INSERT INTO actividad_completada
             (id_usuario, id_actividad, fecha_entrega, observaciones)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [id_alumno, id_tarea, fecha_entrega, observaciones]
        );

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async buscarPorId(id_entrega: number): Promise<EntregaTarea | undefined> {
        const resultado = await pool.query(
            "SELECT * FROM actividad_completada WHERE id_registro = $1",
            [id_entrega]
        );

        if (resultado.rows.length === 0) {
            return undefined;
        }

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async buscarPorAlumno(id_alumno: number): Promise<EntregaTarea[]> {
        const resultado = await pool.query(
            "SELECT * FROM actividad_completada WHERE id_usuario = $1",
            [id_alumno]
        );

        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async buscarPorTarea(id_tarea: number): Promise<EntregaTarea[]> {
        const resultado = await pool.query(
            "SELECT * FROM actividad_completada WHERE id_actividad = $1",
            [id_tarea]
        );

        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async calificar(
        id_entrega: number,
        calificacion: number,
        observaciones: string
    ): Promise<EntregaTarea | undefined> {
        const resultado = await pool.query(
            `UPDATE actividad_completada
             SET calificacion = $1,
                 observaciones = $2
             WHERE id_registro = $3
             RETURNING *`,
            [calificacion, observaciones, id_entrega]
        );

        if (resultado.rows.length === 0) {
            return undefined;
        }

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async eliminar(id_entrega: number): Promise<boolean> {
        const resultado = await pool.query(
            "DELETE FROM actividad_completada WHERE id_registro = $1",
            [id_entrega]
        );

        return resultado.rowCount > 0;
    }

}
