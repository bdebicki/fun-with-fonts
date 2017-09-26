const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Server running at http://127.0.0.1:' + port + '/');