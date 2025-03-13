// Api nodejs base

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//modulo de validacion
const {existeUsuario, validarUsuario, usuarios} = require('./validacion/validacion');
const { token } = require('morgan');
//usar middleware jason
app.use(express.json());

// usar el middleware de log
const { morganMiddleware, morganConsole } = require('./log/log');
// app.use(morganConsole); // Registra en consola (opcional)
app.use(morganMiddleware); // Registra en archivo 'access.log'



// Consultar todos los usuarios
app.get('/api/usuarios', (req, res) => {
    res.send(usuarios);
});

// Consultar un usuario por id
app.get('/api/usuarios/:id', (req, res) => {
    let usuario = existeUsuario(req.params.id);
    if (!usuario) res.status(404).send('El usuario no fue encontrado');
    res.send(usuario);  
});

// Crear un usuario POST
app.post('/api/usuarios', (req, res) => {
    
    const {error, value} = validarUsuario(req.body);
    
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const usuario = {
        id: usuarios.length + 1,
        nombre: value.nombre,
        correo: value.correo
    };
    usuarios.push(usuario);
    res.send(usuario);
});

// Actualizar un usuario por id con PUT
app.put('/api/usuarios/:id', (req, res) => {
    
    let usuario = existeUsuario(req.params.id);
    if (!usuario) {
        res.status(404).send('El usuario no fue encontrado');
        return;
    };
    
    // Validar la información
    const {error, value} = validarUsuario(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    usuario.nombre = value.nombre;
    usuario.correo = value.correo;
    res.send(usuario);
   
});

// Eliminar un usuario por id
app.delete('/api/usuarios/:id', (req, res) => {
    let usuario = existeUsuario(req.params.id);
    if (!usuario) {
        res.status(404).send('El usuario no fue encontrado');
        return;
    }
    const index = usuarios.indexOf(usuario);
    usuarios.splice(index, 1);
    res.send(usuario);
});


// el puerto en el que escucha el servidor
app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
}
); 

