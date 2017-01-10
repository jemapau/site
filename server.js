var express = require('express');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.set('view engine', 'html');

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/signup', function (req, res) {
  res.render('index');
})

app.get('/signin', function (req, res) {
  res.render('index');
})

app.listen(3000, function (err) {
  if (err) return console.log('There was an error'), process.exit(1);

  console.log('On the port 3000');
})
