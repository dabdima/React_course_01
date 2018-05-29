var express = require('express'); //подключение express
var app = express(); // в app теперь лежит ф-ционал нашего веб-сервера

app.use(express.static('public'));

//для отладки и удобства, чтобы в терминале показывало что мы запрашиваем
app.use(function log (req, res, next) {
    console.log([req.method, req.url].join(' '));
    next();
});

app.listen(3333, function () {
    console.log('listening on 3333 ...');
});
// при вводе в консоль "node server.js" выполнится выше указанное
// порт может быть любой в диапазоне 1024...65535
