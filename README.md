<<<<<<< HEAD
# API Proyectointegrador (Mistontli) — Express + TypeScript + PostgreSQL

Proyecto educativo: API REST modular en **Node.js (Express) + TypeScript**. Autenticación por **JWT** y autorización por roles.

Estado actual: desarrollo con migración parcial a PostgreSQL y arquitectura original preservada. El proyecto ya usa repositorios SQL para los módulos centrales, mientras que la estructura de controladores y rutas se mantiene intacta.

---

## Qué hemos hecho hasta ahora

- Migración de persistencia a PostgreSQL usando `pg` y `await pool.query()`.
- Mantenimiento de la arquitectura original: rutas → controladores → repositorios.
- Conservación de nombres de rutas, controladores, middleware, JWT y lógica de validación existentes.
- Implementación en SQL de los módulos:
  - `Usuarios` → tabla `usuario`
  - `Materias` → tabla `materia`
  - `Temas` → tabla `tema`
  - `Tareas` → tabla `actividad`
  - `Entregas` → tabla `actividad_completada`
  - `Exámenes` → tabla `evaluacion`
  - `Anuncios` → tabla `publicacion`
  - `Asesorías` → reutiliza `publicacion` con marca interna en `contenido`
- Validación de tipo con `npx tsc --noEmit` después de cada migración crítica.

---

## Migración de repositorios y estado actual

- `src/repositories/RepositorioUsuarios.ts` — usa tabla `usuario`.
- `src/repositories/RepositorioMateria.ts` — usa tabla `materia`.
- `src/repositories/RepositorioTemas.ts` — usa tabla `tema`.
- `src/repositories/RepositorioTareas.ts` — usa tabla `actividad`.
- `src/repositories/RepositorioEntregas.ts` — usa tabla `actividad_completada`.
- `src/repositories/RepositorioExamenes.ts` — usa tabla `evaluacion`.
- `src/repositories/RepositorioAnuncios.ts` — usa tabla `publicacion`.
- `src/repositories/RepositorioAsesorias.ts` — usa tabla `publicacion` con contenido JSON marcado como asesoría.

---

## Base de datos actual

La base de datos conectada es `Miztontli` en PostgreSQL.

### Tablas existentes detectadas

- `usuario`
- `materia`
- `tema`
- `actividad`
- `actividad_completada`
- `evaluacion`
- `publicacion`
- `comentario`
- `recurso`
- `progreso`
- `notificacion`
- `resultado_evaluacion`
- `usuario_materia`

### Estado actual de datos

Todas las tablas están actualmente vacías en esta instalación de `Miztontli`.

- `usuario`: 0 filas
- `materia`: 0 filas
- `tema`: 0 filas
- `actividad`: 0 filas
- `actividad_completada`: 0 filas
- `evaluacion`: 0 filas
- `publicacion`: 0 filas
- `comentario`: 0 filas
- `recurso`: 0 filas
- `progreso`: 0 filas
- `notificacion`: 0 filas
- `resultado_evaluacion`: 0 filas
- `usuario_materia`: 0 filas

> Nota: la base de datos está creada y accesible, pero no contiene registros de prueba en este momento.

---

## Tablas relevantes para el proyecto

Las tablas oficiales que ya existen en la base de datos y que forman parte del esquema objetivo son:

- `usuario`
- `materia`
- `usuario_materia`
- `tema`
- `actividad`
- `actividad_completada`
- `evaluacion`
- `resultado_evaluacion`
- `recurso`
- `progreso`
- `publicacion`
- `comentario`
- `notificacion`

---

## Qué falta documentar o implementar

- Las tablas `comentario`, `recurso`, `progreso`, `notificacion`, `resultado_evaluacion` no tienen endpoints ni repositorios implementados aún.
- El módulo de `Asesorías` está funcionando, pero se apoya en la tabla `publicacion` con marca interna; si quieres, puedo modelarlo con una tabla dedicada si eso encaja mejor con el dominio.
- El README refleja el estado actual; cuando envíes los requerimientos funcionales completos, puedo comparar y listar exactamente qué módulos y subfuncionalidades faltan.

---

## Estructura principal (ubicaciones clave)

- `src/app.ts` — configuración de Express y montaje de rutas.
- `src/server.ts` — arranque del servidor.
- `src/controllers/` — lógica por recurso.
- `src/repositories/` — persistencia SQL por recurso.
- `src/models/` — definiciones de entidades.
- `src/routes/` — definición de endpoints por recurso.
- `src/middlewares/` — autenticación y roles.
- `src/utils/` — utilidades JWT y recuperación de contraseña.

---

## Cómo ejecutar

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

3. Punto base de la API:

- `http://localhost:8000`

---

## Notas de configuración

- Actualmente el JWT secret está embebido en el código.
- Recomiendo mover secret y credenciales de BD a variables de entorno.
- La conexión PostgreSQL ya está configurada en `src/config/database.ts`.

# PROMPT PARA ANALIZAR MI PROYECTO COMPLETO
Quiero que actúes como Arquitecto de Software Senior y Analista de Sistemas.

Voy a proporcionarte el código completo de mi proyecto backend desarrollado con Node.js + Express + TypeScript.

Antes de realizar cualquier cambio, analiza completamente el proyecto.

Necesito que generes una documentación técnica completa con el siguiente formato.

## 1. Resumen general del proyecto
Explica:

- Objetivo del sistema.
- Arquitectura utilizada.
- Tecnologías utilizadas.
- Organización del proyecto.
- Flujo general del backend.
- Cómo se comunican los módulos.

---

## 2. Estructura del proyecto
Genera el árbol completo de carpetas y archivos.

Ejemplo:

src/
├── controllers
├── models
├── repositories
├── routes
├── middlewares
├── utils
├── app.ts
└── server.ts

Explica la función de cada carpeta y archivo.

---

## 3. Modelos del sistema
Para cada modelo indica:

- Nombre
- Propiedades
- Relaciones con otros modelos
- Descripción
Ejemplo:

Usuario

- id
- nombre
- apellido
- correo
- contraseña
- rol
Descripción:
Representa un usuario del sistema.

---

## 4. Repositorios
Para cada repositorio explica:

- Qué almacena
- Qué métodos tiene
- Qué hace cada método
Ejemplo:

RepositorioUsuarios

Métodos:

listar()

agregar()

buscarPorId()

buscarPorCorreo()

actualizar()

eliminar()

etc.

---

## 5. Controladores
Explica cada controlador.

Por cada método indica:

- Ruta
- Método HTTP
- Parámetros
- Respuesta
- Qué hace internamente

---

## 6. Todas las rutas del proyecto
Necesito una tabla completa como esta:

MétodoRutaDescripciónRequiere TokenRolesPOST/usuariosRegistrar usuarioNoTodosPOST/usuarios/loginIniciar sesiónNoTodosPUT/usuarios/perfilActualizar perfilSíTodosPOST/materiasCrear materiaSíADMIN, DOCENTENo omitas ninguna ruta.

---

## 7. Explicación para Postman
Necesito un manual completo para probar toda la API.

Para cada endpoint genera:

- URL
- Método HTTP
- Headers
- Authorization
- Body
- Ejemplo de petición
- Ejemplo de respuesta
- Orden correcto para probarlo
Debe incluir el flujo completo desde que el servidor está vacío.

Ejemplo:

1. Registrar usuario
2. Login
3. Copiar token
4. Crear materia
5. Crear tema
6. Crear tarea
7. etc.

---

## 8. Seguridad
Explica:

- JWT
- Middleware auth
- Middleware de roles
- Qué rutas están protegidas
- Qué roles puede usar cada ruta

---

## 9. Base de datos
Analiza todos los modelos y genera el diseño completo de la base de datos.

Incluye:

- Todas las tablas
- Columnas
- Tipos de datos
- Primary Keys
- Foreign Keys
- Relaciones
- Cardinalidades
También genera el diagrama entidad-relación (ERD) en formato Mermaid y describe cómo implementarlo en MySQL o PostgreSQL.

---

## 10. Requerimientos funcionales
Genera una tabla con todos los RF.

Indica:

- Código RF
- Nombre
- Descripción
- Estado
Clasifica cada uno como:

✅ Implementado

🟡 Parcialmente implementado

❌ No implementado

---

## 11. Requerimientos no funcionales
Genera los RNF que cumple actualmente el proyecto y los que faltan implementar.

---

## 12. Arquitectura
Genera un diagrama de la arquitectura del backend.

Debe incluir:

Cliente

↓

Express

↓

Routes

↓

Controllers

↓

Repositories

↓

Modelos

↓

Base de datos (futura)

---

## 13. Flujo de autenticación
Explica paso a paso:

Registro

↓

Hash con bcrypt

↓

Login

↓

JWT

↓

Bearer Token

↓

Middleware

↓

Acceso a rutas protegidas

---

## 14. Mejoras recomendadas
Indica todo lo que hace falta para convertir este backend en un backend profesional.

Por ejemplo:

- DTOs
- Validaciones
- Base de datos
- Prisma u ORM
- Logs
- Variables de entorno
- Docker
- Tests
- Swagger
- Paginación
- Manejo de errores
- Servicios
- Arquitectura limpia

---

## 15. Continuación del proyecto
Finalmente, genera una hoja de ruta indicando exactamente qué implementar después, en orden de prioridad, para completar el backend al 100%.

No hagas modificaciones al código hasta haber terminado el análisis completo.

Quiero una documentación técnica profesional, detallada y organizada.


=======
# API Proyectointegrador (Mistontli) — Express + TypeScript + PostgreSQL

Proyecto educativo: API REST modular en **Node.js (Express) + TypeScript**. Autenticación por **JWT** y autorización por roles.

Estado actual: desarrollo con migración parcial a PostgreSQL y arquitectura original preservada. El proyecto ya usa repositorios SQL para los módulos centrales, mientras que la estructura de controladores y rutas se mantiene intacta.

---

## Qué hemos hecho hasta ahora

- Migración de persistencia a PostgreSQL usando `pg` y `await pool.query()`.
- Mantenimiento de la arquitectura original: rutas → controladores → repositorios.
- Conservación de nombres de rutas, controladores, middleware, JWT y lógica de validación existentes.
- Implementación en SQL de los módulos:
  - `Usuarios` → tabla `usuario`
  - `Materias` → tabla `materia`
  - `Temas` → tabla `tema`
  - `Tareas` → tabla `actividad`
  - `Entregas` → tabla `actividad_completada`
  - `Exámenes` → tabla `evaluacion`
  - `Anuncios` → tabla `publicacion`
  - `Asesorías` → reutiliza `publicacion` con marca interna en `contenido`
- Validación de tipo con `npx tsc --noEmit` después de cada migración crítica.

---

## Migración de repositorios y estado actual

- `src/repositories/RepositorioUsuarios.ts` — usa tabla `usuario`.
- `src/repositories/RepositorioMateria.ts` — usa tabla `materia`.
- `src/repositories/RepositorioTemas.ts` — usa tabla `tema`.
- `src/repositories/RepositorioTareas.ts` — usa tabla `actividad`.
- `src/repositories/RepositorioEntregas.ts` — usa tabla `actividad_completada`.
- `src/repositories/RepositorioExamenes.ts` — usa tabla `evaluacion`.
- `src/repositories/RepositorioAnuncios.ts` — usa tabla `publicacion`.
- `src/repositories/RepositorioAsesorias.ts` — usa tabla `publicacion` con contenido JSON marcado como asesoría.

---

## Base de datos actual

La base de datos conectada es `Miztontli` en PostgreSQL.

### Tablas existentes detectadas

- `usuario`
- `materia`
- `tema`
- `actividad`
- `actividad_completada`
- `evaluacion`
- `publicacion`
- `comentario`
- `recurso`
- `progreso`
- `notificacion`
- `resultado_evaluacion`
- `usuario_materia`

### Estado actual de datos

Todas las tablas están actualmente vacías en esta instalación de `Miztontli`.

- `usuario`: 0 filas
- `materia`: 0 filas
- `tema`: 0 filas
- `actividad`: 0 filas
- `actividad_completada`: 0 filas
- `evaluacion`: 0 filas
- `publicacion`: 0 filas
- `comentario`: 0 filas
- `recurso`: 0 filas
- `progreso`: 0 filas
- `notificacion`: 0 filas
- `resultado_evaluacion`: 0 filas
- `usuario_materia`: 0 filas

> Nota: la base de datos está creada y accesible, pero no contiene registros de prueba en este momento.

---

## Tablas relevantes para el proyecto

Las tablas oficiales que ya existen en la base de datos y que forman parte del esquema objetivo son:

- `usuario`
- `materia`
- `usuario_materia`
- `tema`
- `actividad`
- `actividad_completada`
- `evaluacion`
- `resultado_evaluacion`
- `recurso`
- `progreso`
- `publicacion`
- `comentario`
- `notificacion`

---

## Qué falta documentar o implementar

- Las tablas `comentario`, `recurso`, `progreso`, `notificacion`, `resultado_evaluacion` no tienen endpoints ni repositorios implementados aún.
- El módulo de `Asesorías` está funcionando, pero se apoya en la tabla `publicacion` con marca interna; si quieres, puedo modelarlo con una tabla dedicada si eso encaja mejor con el dominio.
- El README refleja el estado actual; cuando envíes los requerimientos funcionales completos, puedo comparar y listar exactamente qué módulos y subfuncionalidades faltan.

---

## Estructura principal (ubicaciones clave)

- `src/app.ts` — configuración de Express y montaje de rutas.
- `src/server.ts` — arranque del servidor.
- `src/controllers/` — lógica por recurso.
- `src/repositories/` — persistencia SQL por recurso.
- `src/models/` — definiciones de entidades.
- `src/routes/` — definición de endpoints por recurso.
- `src/middlewares/` — autenticación y roles.
- `src/utils/` — utilidades JWT y recuperación de contraseña.

---

## Cómo ejecutar

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

3. Punto base de la API:

- `http://localhost:8000`

---

## Notas de configuración

- Actualmente el JWT secret está embebido en el código.
- Recomiendo mover secret y credenciales de BD a variables de entorno.
- La conexión PostgreSQL ya está configurada en `src/config/database.ts`.
Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/middlewares/rolesMiddleware.ts)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/repositories/index.ts)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/utils/generarJWT.ts)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/package.json)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/tsconfig.json)

Searched for files matching `**/src/**/README.md`, no matches

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src)

Starting: *Read key files* (2/3)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/models)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/models/Docente.ts)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/models/Estudiante.ts)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/models/Horario.ts)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/models/Pregunta.ts)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/models/Respuesta.ts)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/test.ts)

Starting: *Generate technical documentation* (2/2)

Read [](file:///c%3A/Users/Usuario/Desktop/api_proyectointegrador/src/controllers/RegistroController.ts)

## 1. Resumen general del proyecto

- Objetivo del sistema:
  - API REST educativa que gestiona usuarios, materias, temas, tareas, entregas, exámenes, anuncios y asesorías.
  - Permite autenticación con JWT, administración de perfiles y recuperación de contraseña.

- Arquitectura utilizada:
  - Capas: `routes` → `controllers` → `repositories`
  - Persistencia SQL directa usando `pg` y `Pool`
  - Modelo de proyecto modular por recurso

- Tecnologías utilizadas:
  - Node.js
  - Express
  - TypeScript
  - PostgreSQL (`pg`)
  - JWT (`jsonwebtoken`)
  - Bcrypt (`bcrypt`)
  - CORS
  - `ts-node-dev` para desarrollo

- Organización del proyecto:
  - app.ts: configuración de Express y registro de rutas
  - server.ts: arranque del servidor
  - database.ts: configuración de conexión PostgreSQL
  - routes: definición de endpoints por recurso
  - controllers: lógica de negocio y manejo de requests
  - repositories: persistencia hacia la base de datos
  - models: entidades del dominio
  - middlewares: autenticación y autorización
  - utils: utilidades de JWT y tokens de recuperación

- Flujo general del backend:
  - El request llega a un endpoint en `routes`
  - Pasa por middleware de auth/roles si aplica
  - Llega al controller correspondiente
  - El controller valida datos y llama al repositorio
  - El repositorio ejecuta consultas SQL con `pool.query`
  - El controller devuelve la respuesta JSON

- Cómo se comunican los módulos:
  - Rutas instancian controllers
  - Controllers usan repositorios
  - Repositorios usan `pool` de database.ts
  - Middleware de auth/roles se aplica sobre rutas según necesidad

---

## 2. Estructura del proyecto

Árbol principal:

```
package.json
README.md
tsconfig.json
src/
├── app.ts
├── config/
│   └── database.ts
├── controllers/
│   ├── AnuncioController.ts
│   ├── AsesoriaController.ts
│   ├── EntregaController.ts
│   ├── ExamenController.ts
│   ├── LoginController.ts
│   ├── MateriaController.ts
│   ├── PerfilController.ts
│   ├── RegistroController.ts
│   ├── TareaController.ts
│   ├── TemaController.ts
│   └── UsuarioController.ts
├── middlewares/
│   ├── authMiddleware.ts
│   └── rolesMiddleware.ts
├── models/
│   ├── Anuncio.ts
│   ├── Asesoria.ts
│   ├── Docente.ts
│   ├── EntregaTarea.ts
│   ├── Estudiante.ts
│   ├── Examen.ts
│   ├── Horario.ts
│   ├── Materia.ts
│   ├── Pregunta.ts
│   ├── Respuesta.ts
│   ├── Tarea.ts
│   ├── Tema.ts
│   └── Usuario.ts
├── repositories/
│   ├── RepositorioAnuncios.ts
│   ├── RepositorioAsesorias.ts
│   ├── RepositorioEntregas.ts
│   ├── RepositorioExamenes.ts
│   ├── RepositorioMateria.ts
│   ├── RepositorioTareas.ts
│   ├── RepositorioTemas.ts
│   ├── RepositorioUsuarios.ts
│   └── index.ts
├── routes/
│   ├── anuncio.routes.ts
│   ├── asesoria.routes.ts
│   ├── entrega.routes.ts
│   ├── examen.routes.ts
│   ├── login.routes.ts
│   ├── materia.routes.ts
│   ├── tarea.routes.ts
│   ├── tema.routes.ts
│   └── usuario.routes.ts
├── test.ts
└── utils/
    ├── generarJWT.ts
    └── tokensRecuperacion.ts
```

Función de cada carpeta:

- `config`: conexión y configuración de base de datos.
- `controllers`: procesa solicitudes HTTP y construye respuestas.
- `middlewares`: autorizaciones y autenticación.
- `models`: definiciones de entidades, algunas usadas y otras aún sin integración completa.
- `repositories`: acceso a datos mediante consultas SQL.
- `routes`: rutas REST de cada recurso.
- `utils`: utilidades transversales (JWT, recuperación de contraseña).

---

## 3. Modelos del sistema

### Usuario
- Propiedades:
  - `id_usuario`
  - `nombre`
  - `apellido`
  - `correo`
  - `contrasena`
  - `rol`
  - `foto_perfil?`
  - `biografia?`
  - `fecha_registro?`
  - `estado`
- Relaciones:
  - tabla `usuario`
  - usado para login, perfil, recuperación de contraseña
- Descripción:
  - Representa al usuario del sistema con roles y credenciales.

### Materia
- Propiedades:
  - `id_materia`
  - `nombre`
  - `descripcion`
  - `icono`
  - `nivel_educativo`
- Relaciones:
  - tabla `materia`
  - referenciada indirectamente por temas y tareas
- Descripción:
  - Representa una asignatura o curso.

### Tema
- Propiedades:
  - `id_tema`
  - `nombre`
  - `descripcion`
  - `orden`
  - `id_materia`
- Relaciones:
  - tabla `tema`
  - cada tema pertenece a una materia
- Descripción:
  - Unidad o bloque dentro de una materia.

### Tarea
- Propiedades:
  - `id_tarea`
  - `titulo`
  - `descripcion`
  - `fecha_entrega`
  - `calificacion`
  - `id_materia`
- Relaciones:
  - mapeada sobre tabla `actividad`
  - enlaza `actividad.id_tema` con materia mediante `tema`
- Descripción:
  - Representa la tarea/proyecto asignado en una materia.

### EntregaTarea
- Propiedades:
  - `id_entrega`
  - `id_tarea`
  - `id_alumno`
  - `comentario`
  - `archivo`
  - `fecha_entrega`
  - `calificacion?`
  - `observaciones?`
  - `estado`
- Relaciones:
  - mapeada sobre tabla `actividad_completada`
- Descripción:
  - Representa la entrega de una tarea realizada por un estudiante.

### Examen
- Propiedades:
  - `id_examen`
  - `titulo`
  - `tiempo`
  - `id_materia`
  - `activo`
- Relaciones:
  - mapeada sobre tabla `evaluacion`
- Descripción:
  - Representa un examen o evaluación con duración y materia.

### Anuncio
- Propiedades:
  - `id`
  - `titulo`
  - `descripcion`
  - `fecha`
- Relaciones:
  - mapeada sobre tabla `publicacion`
- Descripción:
  - Representa un anuncio general.

### Asesoria
- Propiedades:
  - `id_asesoria`
  - `docente`
  - `fecha`
  - `hora`
  - `enlace`
- Relaciones:
  - reutiliza tabla `publicacion`
  - contenido almacenado como JSON marcado internamente
- Descripción:
  - Representa una asesoría programada con enlace y horario.

### Otros modelos no usados actualmente en rutas/repos
- `Docente`
- `Estudiante`
- `Horario`
- `Pregunta`
- `Respuesta`

> Nota: estos modelos existen en el árbol, pero no tienen repositorios o rutas asociadas en el código actual.

---

## 4. Repositorios

### RepositorioUsuarios
- Almacena usuarios en tabla `Usuario`
- Métodos:
  - `listar()`: devuelve todos los usuarios
  - `agregar(...)`: inserta usuario con hash de contraseña y datos básicos
  - `buscarPorId(id_usuario)`: busca usuario por ID
  - `buscarPorCorreo(correo)`: busca usuario por correo
  - `actualizar(id_usuario, datos)`: actualiza campos parciales
  - `eliminar(id_usuario)`: borra usuario
  - `actualizarContraseña(id_usuario, nuevaContrasena)`: actualiza contraseña

### RepositorioMateria
- Almacena materias en tabla `Materia`
- Métodos:
  - `listar()`
  - `agregar(...)`
  - `buscarPorId(id_materia)`
  - `eliminar(id_materia)`

### RepositorioTemas
- Almacena temas en tabla `Tema`
- Métodos:
  - `listar()`
  - `agregar(nombre, descripcion, orden, id_materia)`
  - `buscarPorMateria(idMateria)`
  - `buscarPorId(id_tema)`
  - `eliminar(id_tema)`

### RepositorioTareas
- Almacena tareas en tabla `actividad`
- Métodos:
  - `listar()`: lee `actividad` unida a `tema` para exponer `id_materia`
  - `agregar(...)`: inserta actividad usando `id_tema` derivado desde `id_materia`
  - `buscarPorMateria(idMateria)`: tareas filtradas por materia vía `tema`
  - `buscarPorId(id_tarea)`
  - `eliminar(id_tarea)`

### RepositorioEntregas
- Almacena entregas en tabla `actividad_completada`
- Métodos:
  - `listar()`
  - `agregar(id_tarea, id_alumno, comentario, archivo)`
  - `buscarPorId(id_entrega)`
  - `buscarPorAlumno(id_alumno)`
  - `buscarPorTarea(id_tarea)`
  - `calificar(id_entrega, calificacion, observaciones)`
  - `eliminar(id_entrega)`

### RepositorioExamenes
- Almacena exámenes en tabla `evaluacion`
- Métodos:
  - `listar()`
  - `agregar(titulo, tiempo, id_materia)`
  - `buscarPorId(id_examen)`
  - `buscarPorMateria(id_materia)`
  - `eliminar(id_examen)`

### RepositorioAnuncios
- Almacena anuncios en tabla `publicacion`
- Métodos:
  - `listar()`
  - `agregar(titulo, descripcion, fecha)`
  - `buscarPorId(id)`
  - `eliminar(id)`

### RepositorioAsesorias
- Almacena asesorías en tabla `publicacion` con marca JSON interna
- Métodos:
  - `listar()`: consulta `publicacion` con `contenido` que contiene `__asesoria`
  - `agregar(docente, fecha, hora, enlace)`: inserta JSON en `contenido`
  - `buscarPorId(id_asesoria)`: busca la publicación marcada como asesoría
  - `eliminar(id_asesoria)`

---

## 5. Controladores

### UsuarioController
- `registrar`: valida y crea usuario nuevo
- `login`: autentica usuario y genera JWT
- `listar`: lista usuarios sin contraseñas
- `buscarPorId`: obtiene usuario por ID
- `actualizarPerfil`: actualiza perfil del usuario autenticado
- `eliminar`: elimina usuario por ID
- `cambiarContraseña`: cambia contraseña del usuario autenticado
- `forgotPassword`: genera token de recuperación en memoria
- `resetPassword`: valida token y actualiza contraseña

### LoginController
- `iniciarSesion`: autenticación alternativa / duplicada para login
- Genera JWT y devuelve datos básicos del usuario

### MateriaController
- `listar`, `agregar`, `buscarPorId`, `eliminar`

### TemaController
- `listar`, `agregar`, `buscarPorMateria`, `eliminar`

### TareaController
- `listar`, `agregar`, `buscarPorMateria`, `eliminar`

### EntregaController
- `listar`, `entregar`, `buscarPorAlumno`, `buscarPorTarea`, `calificar`, `eliminar`

### ExamenController
- `listar`, `agregar`, `buscarPorMateria`, `buscarPorId`, `eliminar`

### AnuncioController
- `listar`, `agregar`, `eliminar`

### AsesoriaController
- `listar`, `agregar`, `eliminar`

---

## 6. Rutas principales y endpoints

- `/usuarios`
  - `GET /`: listar usuarios
  - `POST /`: registrar usuario
  - `POST /login`: inicio de sesión
  - `PUT /cambiar-password`: cambiar contraseña (auth)
  - `PUT /perfil`: actualizar perfil (auth)
  - `GET /:id`: buscar usuario
  - `DELETE /:id`: eliminar usuario
  - `POST /forgot-password`: solicitar token de recuperación
  - `POST /reset-password`: resetear contraseña

- `/login`
  - `POST /`: inicio de sesión (alternativo)

- `/materias`
  - `GET /`: listar materias
  - `POST /`: crear materia (auth + rol ADMIN/DOCENTE)
  - `GET /:id`: buscar materia
  - `DELETE /:id`: eliminar materia

- `/temas`
  - `GET /`
  - `POST /`
  - `GET /materia/:idMateria`
  - `DELETE /:id`

- `/tareas`
  - `GET /`
  - `POST /`
  - `GET /materia/:idMateria`
  - `DELETE /:id`

- `/entregas`
  - `GET /`
  - `POST /`
  - `GET /alumno/:idAlumno`
  - `GET /tarea/:idTarea`
  - `PUT /:id/calificar`
  - `DELETE /:id`

- `/examenes`
  - `GET /`
  - `POST /`
  - `GET /:id`
  - `GET /materia/:idMateria`
  - `DELETE /:id`

- `/anuncios`
  - `GET /`
  - `POST /`
  - `DELETE /:id`

- `/asesorias`
  - `GET /`
  - `POST /`
  - `DELETE /:id`

---

## 7. Middleware de seguridad

### `authMiddleware`
- Extrae `Authorization: Bearer <token>`
- Verifica token JWT con clave fija `"SECRETO_SUPER_SECRETO"`
- Adjunta payload a `req.usuario`
- Devuelve `401` si falta o es inválido

### `permitirRoles`
- Comprueba rol dentro de `req.usuario`
- Permite acceso sólo si el rol está en la lista
- Devuelve `403` si no está autorizado

---

## 8. Base de datos y mapeo de tablas

- Conexión activa a PostgreSQL en `Miztontli`
- Tablas detectadas:
  - `usuario`
  - `materia`
  - `usuario_materia`
  - `tema`
  - `actividad`
  - `actividad_completada`
  - `evaluacion`
  - `resultado_evaluacion`
  - `recurso`
  - `progreso`
  - `publicacion`
  - `comentario`
  - `notificacion`

### Mapeo actual de repositorios a tablas
- `Usuario` → `usuario`
- `Materia` → `materia`
- `Tema` → `tema`
- `Tarea` → `actividad`
- `Entrega` → `actividad_completada`
- `Examen` → `evaluacion`
- `Anuncio` → `publicacion`
- `Asesoria` → `publicacion` con marca `{"__asesoria": true}` en `contenido`

### Observaciones
- `RepositorioTareas` depende de que exista al menos un `tema` para la materia ingresada.
- `RepositorioExamenes` inserta en `evaluacion` usando `id_tema` como `id_materia` en la API, lo cual es un mapeo que puede generar confusión.
- `RepositorioAsesorias` usa `contenido LIKE '%"__asesoria":true%'` para distinguir asesorías.
- tokensRecuperacion.ts usa un `Map` en memoria, no persistente.

---

## 9. Estado de implementación

### Implementado
- Autenticación básica JWT
- Registro de usuarios
- Login
- CRUD de materias, temas, tareas
- Gestión de entregas y calificaciones
- CRUD de exámenes
- CRUD de anuncios
- Gestión de asesorías
- Recuperación de contraseña por token en memoria

### Parcialmente implementado / con riesgo
- Roles sólo aplicados en `materias POST`
- JWT secret hardcoded
- No hay validación de token en rutas de entrega/examen/anuncio/asesoría
- Login existe en dos endpoints (`/usuarios/login` y `/login`)
- Algunos modelos (`Docente`, `Estudiante`, `Horario`, `Pregunta`, `Respuesta`) no están integrados

### No implementado en el código actual
- Endpoints para tablas:
  - `comentario`
  - `recurso`
  - `progreso`
  - `notificacion`
  - `resultado_evaluacion`
- Manejo completo de permisos para todos los recursos
- Variables de entorno para credenciales y JWT
- Documentación de API formal / Postman collection

---

## 10. Recomendaciones clave

- Mover `SECRETO_SUPER_SECRETO` a variable de entorno y usar `dotenv`
- Normalizar el mapeo de `evaluacion` / `tema` / `materia` para evitar uso de `id_tema` como `id_materia`
- Definir tabla dedicada para `asesoria` si se busca claridad, o documentar el uso compartido de `publicacion`
- Aplicar auth a rutas sensibles como entregas, exámenes y publicaciones
- Persistir tokens de recuperación en tabla en lugar de `Map` en memoria
- Eliminar la duplicación de login entre `/usuarios/login` y `/login`

---

## 11. Cómo ejecutar

- `npm install`
- `npm run dev`
- Servidor en `http://localhost:8000`

---

## 12. Conclusión

El backend ya está migrado en gran medida hacia PostgreSQL manteniendo la arquitectura original. Las principales responsabilidades de rutas, controladores y repositorios se conservan. Falta mayor cobertura de seguridad, consistencia del modelo de datos y soporte para ciertas tablas oficiales que todavía no cuentan con endpoints.

>>>>>>> 9debb0c734493963ec40a4dbf27c5cdfad79f63f
