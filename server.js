var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.listen(4568);

console.log('Listening on port: 4568');