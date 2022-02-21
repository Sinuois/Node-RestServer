const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { palabra, nombre = 'sin nombre', apikey } = req.query;
    res.json({
        msg: 'petición get desde el controlador',
        palabra,
        nombre, 
        apikey
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'petición post desde el controlador',
        nombre, 
        edad
    })
}


const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'petición put desde el controlador',
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'petición patch desde el controlador'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'petición delete desde el controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
    
}