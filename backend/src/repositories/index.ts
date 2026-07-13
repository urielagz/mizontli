import { RepositorioUsuarios } from "./RepositorioUsuarios";
import { RepositorioMateria } from "./RepositorioMateria";
import { RepositorioTareas } from "./RepositorioTareas";
import { RepositorioTemas } from "./RepositorioTemas";
import { RepositorioExamenes } from "./RepositorioExamenes";
import { RepositorioAsesorias } from "./RepositorioAsesorias";
import { RepositorioAnuncios } from "./RepositorioAnuncios";
import { RepositorioDocenteEspera } from "./RepositorioDocenteEspera";
import { RepositorioPublicaciones } from "./RepositorioPublicaciones";
import { RepositorioComentarios } from "./RepositorioComentarios";
// ...tus imports existentes


export const repos = {
    usuarios: new RepositorioUsuarios(),
    docentesEspera: new RepositorioDocenteEspera(),
    materias: new RepositorioMateria(),
    tareas: new RepositorioTareas(),
    temas: new RepositorioTemas(),
    examenes: new RepositorioExamenes(),
    asesorias: new RepositorioAsesorias(),
    anuncios: new RepositorioAnuncios(),
    publicaciones: new RepositorioPublicaciones(),
    comentarios: new RepositorioComentarios(),
};