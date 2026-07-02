export class Examen {
    id_examen: number;
    titulo: string;
    tiempo: number;
    id_materia: number;
    activo: boolean;

    constructor(id_examen: number, titulo: string, tiempo: number, id_materia: number, activo: boolean) {
        this.id_examen = id_examen;
        this.titulo = titulo;
        this.tiempo = tiempo;
        this.id_materia = id_materia;
        this.activo = activo;
    }
}
