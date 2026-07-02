export class Tema {
    id_tema: number;
    nombre: string;
    descripcion: string;
    orden: number;
    id_materia: number;

    constructor(
        id_tema: number,
        nombre: string,
        descripcion: string,
        orden: number,
        id_materia: number
    ) {
        this.id_tema = id_tema;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.orden = orden;
        this.id_materia = id_materia;
    }
}
