var express = require('express');
var bodyParser = require('body-parser');
var {getGenres, getMoviesByGenre} = require('./apiHelpers.js');
var {saveFavorite, deleteFavorite, getAllFavorites} = require('./database.js');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
  getMoviesByGenre(req.query.genreId, (data) => {
    res.send(data);
  });
});

app.get('/genres', function(req, res) {
  getGenres((data) => res.send(data));
});

app.post('/save', function(req, res) {
  saveFavorite(req.body, (data) => {
    console.log(data);
  });
});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
