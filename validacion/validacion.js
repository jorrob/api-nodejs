// archivo de middleware de validacion

// usuarios de prueba
const {usuarios} = require('../datos/datos');

const Joi = require('joi');
// Crear un usuario POST
// metodo para verificar si existe el usuario
function existeUsuario(id){
    return (usuarios.find(u => u.id === parseInt(id)));
}
// validar usuario con Joi
function validarUsuario(usuario){
    nombre = usuario.nombre;
    correo = usuario.correo;
    const schema = Joi.object({
        nombre: Joi.string().min(3).max(20).pattern(/^[A-Za-z\s]+$/),
        correo: Joi.string().email()
    });
    return(schema.validate({nombre, correo}));
}

module.exports = {
    existeUsuario,
    validarUsuario,
    usuarios
};

