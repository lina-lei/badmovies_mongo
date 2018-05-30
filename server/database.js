// REFACTOR TO USE MONGO INSTEAD OF MYSQL

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app');

var db = mongoose.connection;

const movieSchema = mongoose.Schema({id: {type: Number, unique: true}, title: String, release_date: Date, vote_average: Number, poster_path: String});

const Movie = mongoose.model('Movie', movieSchema);

const getAllFavorites = function(callback) {
  // get favorites from the database
  // Movie.find()
  // .then((err, data) => {
  //   if(err) console.log('db err getting saved movies', err);
  //   else callback(data)  
  // });
};

const saveFavorite = function(movie, callback) {
  // save movie to favorites in the database
  const movieRec = new Movie({id: movie.id, title: movie.title, release_date: movie.release_date, vote_average: movie.vote_average, poster_path: movie.poster_path});
  movieRec.save().then(callback);
};

const deleteFavorite = function(callback) {
  // delete a movie from favorites in the database
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};
