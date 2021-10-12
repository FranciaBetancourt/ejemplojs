const express = require ('express');
const router = express.Router();
const model = require('../models/favoritasf')();

router.get('/', (req,res) => {
    res.render('index.ejs', {
        nombre:'Francia'
    })
});
module.exports = router;