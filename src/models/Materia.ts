export class Materia {
    id_materia: number;
    nombre: string;
    descripcion: string;
    icono: string;
    nivel_educativo: string;

    constructor(
        id_materia: number,
        nombre: string,
        descripcion: string,
        icono: string,
        nivel_educativo: string
    ) {
        this.id_materia = id_materia;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.icono = icono;
        this.nivel_educativo = nivel_educativo;
    }
}
