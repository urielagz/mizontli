import { Pool } from "pg";

export const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "Miztontli",
    user: "postgres",
    password: "12345"
});
pool.connect()
    .then(async (cliente) => {

        console.log(" PostgreSQL conectado");

        const resultado = await cliente.query("SELECT NOW()");

        console.log("Hora del servidor:");
        console.table(resultado.rows);

        cliente.release();

    })
    .catch(error => {

        console.error(" Error al conectar PostgreSQL");

        console.error(error);

    });