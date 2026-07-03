<<<<<<< HEAD
import { Usuario } from "./Usuario";

export class Estudiante extends Usuario {
    matricula: string;
    carrera: string;
    semestre: number;

    constructor(id: number, nombre: string, apellido: string, correo: string, contraseña: string, matricula: string, carrera: string, semestre: number) {
        super(id, nombre, apellido, correo, contraseña);
        this.matricula = matricula;
        this.carrera = carrera;
        this.semestre = semestre;
    }
}
=======
import { Usuario } from "./Usuario";

export class Estudiante extends Usuario {
    matricula: string;
    carrera: string;
    semestre: number;

    constructor(id: number, nombre: string, apellido: string, correo: string, contraseña: string, matricula: string, carrera: string, semestre: number) {
        super(id, nombre, apellido, correo, contraseña);
        this.matricula = matricula;
        this.carrera = carrera;
        this.semestre = semestre;
    }
}
>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
