import { pool } from "../config/database";
import { Materia } from "../models/Materia";

export class RepositorioMateria {

    private mapFilaAFila(row: any): Materia {
        return new Materia(
            row.id_materia,
            row.nombre,
            row.descripcion,
            row.icono,
            row.nivel_educativo
        );
    }

    async listar(): Promise<Materia[]> {
        const resultado = await pool.query("SELECT * FROM Materia");
        return resultado.rows.map(row => this.mapFilaAFila(row));
    }

    async agregar(
        nombre: string,
        descripcion: string,
        icono: string,
        nivel_educativo: string
    ): Promise<Materia> {
        const resultado = await pool.query(
            `INSERT INTO Materia
             (nombre, descripcion, icono, nivel_educativo)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [nombre, descripcion, icono, nivel_educativo]
        );

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async buscarPorId(id_materia: number): Promise<Materia | undefined> {
        const resultado = await pool.query(
            "SELECT * FROM Materia WHERE id_materia = $1",
            [id_materia]
        );

        if (resultado.rows.length === 0) {
            return undefined;
        }

        return this.mapFilaAFila(resultado.rows[0]);
    }

    async eliminar(id_materia: number): Promise<boolean> {
        const resultado = await pool.query(
            "DELETE FROM Materia WHERE id_materia = $1",
            [id_materia]
        );

        return resultado.rowCount > 0;
    }

}
