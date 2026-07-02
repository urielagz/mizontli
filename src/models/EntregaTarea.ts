export class EntregaTarea {

    id_entrega: number;
    id_tarea: number;
    id_alumno: number;
    comentario: string;
    archivo: string;
    fecha_entrega: Date;
    calificacion?: number;
    observaciones?: string;
    estado: string;

    constructor(
        id_entrega: number,
        id_tarea: number,
        id_alumno: number,
        comentario: string,
        archivo: string,
        fecha_entrega: Date,
        estado: string = "PENDIENTE",
        calificacion?: number,
        observaciones?: string
    ) {
        this.id_entrega = id_entrega;
        this.id_tarea = id_tarea;
        this.id_alumno = id_alumno;
        this.comentario = comentario;
        this.archivo = archivo;
        this.fecha_entrega = fecha_entrega;
        this.estado = estado;
        this.calificacion = calificacion;
        this.observaciones = observaciones;
    }
}