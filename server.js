var express = require('express');

var app = express();

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
