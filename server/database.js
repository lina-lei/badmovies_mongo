// const mysql = require('mysql');
// const mysqlConfig = require('./config.js');

// const connection = mysql.createConnection(mysqlConfig);

// const getAllFavorites = function(callback) {
//   // get favorites from the database
// };

// const saveFavorite = function(callback) {
//   // save movie to favorites in the database
// };

// const deleteFavorites = function(callback) {
//   // delete a movie from favorites in the database
// };

// module.exports = {
//   getAllFavorites,
//   saveFavorite,
//   deleteFavorite
// };



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/badmovies');

var db = mongoose.connection;

const movieSchema = mongoose.Schema({id: Number, title: String, release_date: Date, vote_average: Number, poster_path: String});

const Movie = mongoose.model('Movie', movieSchema);

const getAllFavorites = function(callback) {
  // get favorites from the database
};

const saveFavorite = function(callback) {
  // save movie to favorites in the database
  // const movie = new Movie({id: , title:, release_date: , vote_average: poster_path: });
  // movie.save();
};

const deleteFavorite = function(callback) {
  // delete a movie from favorites in the database
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};
