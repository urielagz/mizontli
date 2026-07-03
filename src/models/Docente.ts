<<<<<<< HEAD
import { Usuario } from "./Usuario";

export class Docente extends Usuario {
    especialidad: string;

    constructor(id: number, nombre: string, apellido: string, correo: string, contraseña: string, especialidad: string) {
        super(id, nombre, apellido, correo, contraseña);
        this.especialidad = especialidad;
    }
}
=======
import { Usuario } from "./Usuario";

export class Docente extends Usuario {
    especialidad: string;

    constructor(id: number, nombre: string, apellido: string, correo: string, contraseña: string, especialidad: string) {
        super(id, nombre, apellido, correo, contraseña);
        this.especialidad = especialidad;
    }
}
>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
