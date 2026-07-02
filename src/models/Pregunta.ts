export class Pregunta {
    id: number;
    pregunta: string;
    opcionA: string;
    opcionB: string;
    opcionC: string;
    opcionD: string;
    respuestaCorrecta: string;

    constructor(id: number, pregunta: string, opcionA: string, opcionB: string, opcionC: string, opcionD: string, respuestaCorrecta: string) {
        this.id = id;
        this.pregunta = pregunta;
        this.opcionA = opcionA;
        this.opcionB = opcionB;
        this.opcionC = opcionC;
        this.opcionD = opcionD;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}
