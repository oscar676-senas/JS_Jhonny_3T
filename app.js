import express from "express"
import "dotenv/config"
//const bodyParser = require('body-parser');//importacion commonjs
import bodyParser from "body-parser";//importacion ES "module"

const app = express();  
const port = process.env.PORT || 3000;

//configurar el uso de body-parse para nuestra aplicacion - no lo estmos utilizando
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.send("Hola ficha 3407184, estamos aprendiento Express. en el SENA")
})

//otro endpoint, funcion de flecha
app.get("/productos", (req, res)=>{
    //usando template string ``
    res.send(`<h1>Listado de productos</h1>
        <ol>
        <li>Televisor</li>
        <li>Celular</li>
        <li>Impresora</li>
        </ol>`)
})

app.get("/productoss/:nombre", (req,res)=>{
    const producto =req.params.nombre
    res.send(`El producto es ${producto}`)
})

app.listen(port, function(){
    console.log(`Servidor funcionando ${port}`)
})

import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

/* ===========================
1. Parámetro simple único
=========================== */
app.get("/saludo/:nombre", (req, res) => {
    const { nombre } = req.params;

    if (nombre.length < 3) {
        return res.status(400).json({
            error: "El nombre debe tener mínimo 3 letras."
        });
    }

    res.send(`Hola ${nombre}, bienvenido`);
});

/* ===========================
2. Parámetro simple único
=========================== */
app.get("/productos/:nombre", (req, res) => {
    const { nombre } = req.params;

    const producto = {
        id: 1,
        nombre: nombre,
        stock: 30,
        precioUnitario: 2500000,
        categoria: "Tecnología"
    };

    res.json(producto);
});

/* ===========================
3. Múltiples parámetros
=========================== */
app.get("/productos/:categoria/:id", (req, res) => {
    const { categoria, id } = req.params;

    res.json({
        producto: id,
        categoria: categoria,
        servidor: "Servidor Express ADSO"
    });
});

/* ===========================
4. Params + Query
=========================== */
app.get("/usuarios/:id/posts", (req, res) => {

    const { id } = req.params;
    const { orden } = req.query;

    let publicaciones = [
        {
            id: 1,
            titulo: "Mi primera publicación"
        },
        {
            id: 2,
            titulo: "Aprendiendo Express"
        },
        {
            id: 3,
            titulo: "Uso de parámetros"
        }
    ];

    if (orden === "desc") {
        publicaciones.reverse();
    }

    res.json({
        usuario: id,
        orden: orden || "asc",
        publicaciones
    });

});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});