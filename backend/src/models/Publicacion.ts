export type TipoPublicacion = "pregunta" | "recurso" | "general";

export class Publicacion {
    id_publicacion: number;
    titulo: string;
    contenido?: string;
    fecha_publicacion?: Date;
    id_usuario: number;
    id_materia?: number;
    tipo: TipoPublicacion;

    constructor(
        id_publicacion: number,
        titulo: string,
        id_usuario: number,
        tipo: TipoPublicacion = "general",
        contenido?: string,
        id_materia?: number,
        fecha_publicacion?: Date
    ) {
        this.id_publicacion = id_publicacion;
        this.titulo = titulo;
        this.id_usuario = id_usuario;
        this.tipo = tipo;
        this.contenido = contenido;
        this.id_materia = id_materia;
        this.fecha_publicacion = fecha_publicacion;
    }
}