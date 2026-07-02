import express from "express";
import cors from "cors";
import entregaRoutes from "./routes/entrega.routes";
import anuncioRoutes from "./routes/anuncio.routes";
import asesoriaRoutes from "./routes/asesoria.routes";
import examenRoutes from "./routes/examen.routes";
import materiaRoutes from "./routes/materia.routes";
import tareaRoutes from "./routes/tarea.routes";
import temaRoutes from "./routes/tema.routes";
import usuarioRoutes from "./routes/usuario.routes";
import loginRoutes from "./routes/login.routes";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/anuncios", anuncioRoutes);
app.use("/asesorias", asesoriaRoutes);
app.use("/examenes", examenRoutes);
app.use("/materias", materiaRoutes);
app.use("/tareas", tareaRoutes);
app.use("/temas", temaRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/login", loginRoutes);
app.use("/entregas", entregaRoutes);

export default app;