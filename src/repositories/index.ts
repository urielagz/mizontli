import { RepositorioUsuarios } from "./RepositorioUsuarios";
import { RepositorioMateria } from "./RepositorioMateria";
import { RepositorioTareas } from "./RepositorioTareas";
import { RepositorioTemas } from "./RepositorioTemas";
import { RepositorioExamenes } from "./RepositorioExamenes";
import { RepositorioAsesorias } from "./RepositorioAsesorias";
import { RepositorioAnuncios } from "./RepositorioAnuncios";

export const repos = {
    usuarios: new RepositorioUsuarios(),
    materias: new RepositorioMateria(),
    tareas: new RepositorioTareas(),
    temas: new RepositorioTemas(),
    examenes: new RepositorioExamenes(),
    asesorias: new RepositorioAsesorias(),
    anuncios: new RepositorioAnuncios()
};