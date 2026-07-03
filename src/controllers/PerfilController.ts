<<<<<<< HEAD
import { RepositorioUsuarios } from "../repositories/RepositorioUsuarios";

export class PerfilController {

    constructor(private repoUsuarios: RepositorioUsuarios) {}

    async buscarPerfil(id: number) {

        const user = await this.repoUsuarios.buscarPorId(id);

        if (!user) {
            return {
                ok: false,
                mensaje: "Usuario no encontrado"
            };
        }

        
        const safeUser = {
            id_usuario: user.id_usuario,
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo
        };

        return {
            ok: true,
            data: safeUser
        };
    }
=======
import { RepositorioUsuarios } from "../repositories/RepositorioUsuarios";

export class PerfilController {

    constructor(private repoUsuarios: RepositorioUsuarios) {}

    async buscarPerfil(id: number) {

        const user = await this.repoUsuarios.buscarPorId(id);

        if (!user) {
            return {
                ok: false,
                mensaje: "Usuario no encontrado"
            };
        }

        // SAFE: ya validamos que existe
        const safeUser = {
            id_usuario: user.id_usuario,
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo
        };

        return {
            ok: true,
            data: safeUser
        };
    }
>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
}