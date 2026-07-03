<<<<<<< HEAD
import { RepositorioUsuarios } from "../repositories/RepositorioUsuarios";
import { Usuario } from "../models/Usuario";

export class RegistroController {

    constructor(private repoUsuarios: RepositorioUsuarios) {}

    async registrar(nombre: string, apellido: string, correo: string, contraseña: string): Promise<Usuario> {
        return this.repoUsuarios.agregar(nombre, apellido, correo, contraseña);
    }

}
=======
import { RepositorioUsuarios } from "../repositories/RepositorioUsuarios";
import { Usuario } from "../models/Usuario";

export class RegistroController {

    constructor(private repoUsuarios: RepositorioUsuarios) {}

    async registrar(nombre: string, apellido: string, correo: string, contraseña: string): Promise<Usuario> {
        return this.repoUsuarios.agregar(nombre, apellido, correo, contraseña);
    }

}
>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
