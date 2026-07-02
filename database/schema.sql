--Miztontli esquema de base de datos (PostgreSQL)
--Basado en el diagrama relacional con 9 tablas principales y 2 intermedias
BEGIN;

--=============================
--Tipos ENUM para campos controlados
CREATE TYPE rol_usuario AS ENUM ('alumno', 'docente', 'admin');
CREATE TYPE tipo_recurso AS ENUM ('informacion','documento','video','enlace');
CREATE TYPE tipo_notificacion AS ENUM ('actividad','evaluacion','comentario');
--=============================
--Creacion Tabla Usuario
CREATE TABLE Usuario (
	id_usuario SERIAL PRIMARY KEY,
	nombre VARCHAR (50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
	correo VARCHAR (100) NOT NULL UNIQUE,
	contrasena VARCHAR(255) NOT NULL, 
	rol rol_usuario NOT NULL DEFAULT 'alumno',
	foto_perfil VARCHAR(255),
	biografia TEXT,
	fecha_registro TIMESTAMP NOT NULL DEFAULT NOW(),
	estado BOOLEAN NOT NULL DEFAULT TRUE
);
--=============================
--Creacion Tabla Materia
CREATE TABLE Materia (
	id_materia SERIAL PRIMARY KEY,
	nombre VARCHAR (100) NOT NULL,
	descripcion TEXT,
	icono VARCHAR(255) NOT NULL,
	nivel_educativo VARCHAR(50) NOT NULL
);
--=============================
--Creacion Tabla UsuarioMateria 
CREATE TABLE UsuarioMateria (
	id_inscripcion SERIAL PRIMARY KEY,
	id_usuario INTEGER NOT NULL REFERENCES Usuario(id_usuario) ON DELETE CASCADE,
	id_materia INTEGER NOT NULL REFERENCES Materia(id_materia) ON DELETE CASCADE,
	fecha_inscripcion TIMESTAMP NOT NULL DEFAULT NOW(),
	UNIQUE (id_usuario, id_materia)
);
--=============================
--Creacion Tabla Actividad
CREATE TABLE Actividad (
	id_actividad SERIAL PRIMARY KEY,
	titulo VARCHAR  (100) NOT NULL,
	descripcion TEXT,
	fecha_entrega TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	id_materia INTEGER NOT NULL REFERENCES Materia(id_materia) ON DELETE CASCADE
);
--=============================
--Creacion Tabla Actividad_completada
CREATE TABLE Actividad_completada (
	id_registro SERIAL PRIMARY KEY,
	id_usuario INTEGER NOT NULL REFERENCES Usuario(id_usuario) ON DELETE CASCADE,
	id_actividad INTEGER NOT NULL REFERENCES Actividad(id_actividad) ON DELETE CASCADE,
	fecha_entrega TIMESTAMP,
	calificacion NUMERIC (5,2) NOT NULL,
	observaciones TEXT,
	UNIQUE (id_usuario, id_actividad)
);
--==========================
--==========================
--Creacion Tabla Evaluacion
CREATE TABLE Evaluacion (
	id_evaluacion SERIAL PRIMARY KEY,
	titulo VARCHAR(50) NOT NULL,
	descripcion TEXT,
	lim_tiempo INTEGER,
	fecha_lim TIMESTAMP,
	id_materia INTEGER NOT NULL REFERENCES Materia (id_materia) ON DELETE CASCADE,
	id_usuario INTEGER NOT NULL REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);
--==========================
--Creacion Tabla ResultadoEvaluaicion
CREATE TABLE ResultadoEvaluacion (
	id_resultado SERIAL PRIMARY KEY,
	id_usuario INTEGER NOT NULL REFERENCES Usuario(id_usuario) ON DELETE CASCADE,
	id_evaluacion INTEGER NOT NULL REFERENCES Evaluacion(id_evaluacion) ON DELETE CASCADE,
	calificacion NUMERIC (5,2) NOT NULL,
	fecha_presentacion TIMESTAMP NOT NULL DEFAULT NOW(),
	UNIQUE (id_usuario, id_evaluacion)
);
--==========================
--Creacion Tabla Recurso
CREATE TABLE Recurso (
	id_recurso SERIAL PRIMARY KEY,
	titulo VARCHAR(100) NOT NULL,
	descripcion TEXT,
	tipo tipo_recurso NOT NULL,
	url_archivo VARCHAR(255) NOT NULL,
	fecha_publicacion TIMESTAMP NOT NULL DEFAULT NOW(),
	id_materia INTEGER NOT NULL REFERENCES Materia(id_materia) ON DELETE CASCADE,
	id_usuario INTEGER NOT NULL REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);
--===========================
--Creacion Tabla Progreso
CREATE TABLE Progreso (
	id_progreso SERIAL PRIMARY KEY,
	porcentaje_avance NUMERIC(5,2) NOT NULL DEFAULT 0,
	act_completas INTEGER NOT NULL DEFAULT 0,
	evaluaciones_completas INTEGER NOT NULL DEFAULT 0,
	ultima_actualizacion TIMESTAMP NOT NULL DEFAULT NOW(),
	id_usuario INTEGER NOT NULL REFERENCES Usuario(id_usuario)
);
--========================
--Creacion Tabla Publicacion
CREATE TABLE Publicacion (
	id_publicacion SERIAL PRIMARY KEY,
	titulo VARCHAR(50) NOT NULL,
	contenido TEXT,
	fecha_publicacion TIMESTAMP NOT NULL DEFAULT NOW(),
	id_usuario INTEGER NOT NULL REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);
--=========================
--Creacion Tabla Comentario
CREATE TABLE Comentario (
	id_comentario SERIAL PRIMARY KEY,
	contenido TEXT NOT NULL,
	fecha_comentario TIMESTAMP NOT NULL DEFAULT NOW(),
	id_usuario INTEGER NOT NULL REFERENCES Usuario(id_usuario) ON DELETE CASCADE,
	id_publicacion INTEGER NOT NULL REFERENCES Publicacion(id_publicacion) ON DELETE CASCADE 
);
--=========================
--Creacion Tabla Notificacion
CREATE TABLE Notificacion (
	id_notificacion SERIAL PRIMARY KEY,
	titulo VARCHAR(50) NOT NULL,
	mensaje TEXT NOT NULL,
	leida BOOLEAN NOT NULL DEFAULT FALSE,
	tipo tipo_notificacion NOT NULL,
	fecha_creacion TIMESTAMP NOT NULL DEFAULT NOW(),
	fecha_lectura TIMESTAMP,
	id_usuario INTEGER NOT NULL REFERENCES Usuario (id_usuario) ON DELETE CASCADE
);

COMMIT ;