// Import required modules
const express = require('express');
const mustacheExpress = require('mustache-express');

// Initialize express app
const app = express();

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Define a route
app.get('/', function (req, res) {
    res.render('index', { name: 'Adel' });
});

// Start the server
app.listen(3000, function () {
    console.log('App listening on port 3000');
});
