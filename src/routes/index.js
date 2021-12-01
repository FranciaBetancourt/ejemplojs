const express = require ('express');
const router = express.Router();
const model = require('../models/libros')();

const Valor = require('../models/libros');

router.get('/', async (req, res) => {
    const libros = await Valor.find();
    console.log(libros);
    res.render('index.ejs', {
        libros
    });
});

router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
});
module.exports = router;