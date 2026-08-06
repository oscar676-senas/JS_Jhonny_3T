require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get("/", (_, res) => {
    res.send("Hola, estamos aprendiendo express con la ficha 3407184");
});


app.get("/datos/personales", (_, res) => {
    res.json({
        nombre: "Oscar",
        apellido: "Navarro",
        telefono: "3123456789"
    });
});

app.get("/datos/programa", (_, res) => {
    res.json({
        nombre: "Software",
        programa: "ADSO",
        ficha: "3407184"
    });
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});

