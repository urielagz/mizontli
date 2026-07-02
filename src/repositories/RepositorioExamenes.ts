import { pool } from "../config/database";
import { Examen } from "../models/Examen";

export class RepositorioExamenes {

    private mapFilaAFila(row: any): Examen {
        return new Examen(
            row.id_evaluacion,
            row.titulo,
            row.lim_tiempo,
            row.id_tema,
            true
        );
    }

    async listar(): Promise<Examen[]> {
        const resultado = await pool.query("SELECT * FROM evaluacion");
        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async agregar(titulo: string, tiempo: number, id_materia: number): Promise<Examen> {
        const resultado = await pool.query(
            `INSERT INTO evaluacion
             (titulo, descripcion, lim_tiempo, fecha_lim, id_tema, id_usuario)
             VALUES ($1, NULL, $2, NULL, $3, 1)
             RETURNING *`,
            [titulo, tiempo, id_materia]
        );

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async buscarPorId(id_examen: number): Promise<Examen | undefined> {
        const resultado = await pool.query(
            "SELECT * FROM evaluacion WHERE id_evaluacion = $1",
            [id_examen]
        );

        if (resultado.rows.length === 0) {
            return undefined;
        }

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async buscarPorMateria(id_materia: number): Promise<Examen[]> {
        const resultado = await pool.query(
            "SELECT * FROM evaluacion WHERE id_tema = $1",
            [id_materia]
        );

        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async eliminar(id_examen: number): Promise<boolean> {
        const resultado = await pool.query(
            "DELETE FROM evaluacion WHERE id_evaluacion = $1",
            [id_examen]
        );

        return resultado.rowCount > 0;
    }

}
