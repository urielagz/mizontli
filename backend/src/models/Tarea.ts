export class Tarea {
    id_tarea: number;
    titulo: string;
    descripcion: string;
    fecha_entrega: Date;
    calificacion: number;
    id_materia: number;

    constructor(
        id_tarea: number,
        titulo: string,
        descripcion: string,
        fecha_entrega: Date,
        calificacion: number,
        id_materia: number
    ) {
        this.id_tarea = id_tarea;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha_entrega = fecha_entrega;
        this.calificacion = calificacion;
        this.id_materia = id_materia;
    }
}
