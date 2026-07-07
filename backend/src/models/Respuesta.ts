export class Respuesta {
    id: number;
    estudiante: number;
    pregunta: number;
    respuesta: string;

    constructor(id: number, estudiante: number, pregunta: number, respuesta: string) {
        this.id = id;
        this.estudiante = estudiante;
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }
}
