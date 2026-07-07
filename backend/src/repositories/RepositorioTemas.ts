import { pool } from "../config/database";
import { Tema } from "../models/Tema";

export class RepositorioTemas {

    private mapFilaAFila(row: any): Tema {
        return new Tema(
            row.id_tema,
            row.nombre,
            row.descripcion,
            row.orden,
            row.id_materia
        );
    }

    async listar(): Promise<Tema[]> {
        const resultado = await pool.query("SELECT * FROM Tema");
        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async agregar(nombre: string, descripcion: string, orden: number, id_materia: number): Promise<Tema> {
        const resultado = await pool.query(
            `INSERT INTO Tema
             (nombre, descripcion, orden, id_materia)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [nombre, descripcion, orden, id_materia]
        );

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async buscarPorMateria(idMateria: number): Promise<Tema[]> {
        const resultado = await pool.query(
            "SELECT * FROM Tema WHERE id_materia = $1",
            [idMateria]
        );

        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async buscarPorId(id_tema: number): Promise<Tema | undefined> {
        const resultado = await pool.query(
            "SELECT * FROM Tema WHERE id_tema = $1",
            [id_tema]
        );

        if (resultado.rows.length === 0) {
            return undefined;
        }

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async eliminar(id_tema: number): Promise<boolean> {
        const resultado = await pool.query(
            "DELETE FROM Tema WHERE id_tema = $1",
            [id_tema]
        );

        return resultado.rowCount > 0;
    }

}
