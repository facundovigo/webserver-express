const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const hbs = require('hbs');
require('./hbs/helpers')

// cambio cuando usas heroku
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');


//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'BBVA',
    });
})

app.get('/about', function(req, res) {

    res.render('about');
})

app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${port}`);
});