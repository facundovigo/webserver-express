const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'content-Type': 'application/json' });

        let salida = {
            nombre: 'facundo',
            edad: 32,
            url: req.url

        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(3000)

console.log('Escuchando en el puerto 3000')