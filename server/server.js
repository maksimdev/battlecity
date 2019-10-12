var express = require('express');
var app = express();

const PUBLIC_PATH = __dirname.slice(0, -6) + 'client\\build'; 

app.use(express.static(PUBLIC_PATH));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});