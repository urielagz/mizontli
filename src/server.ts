import "./config/database";

import app from "./app";

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});