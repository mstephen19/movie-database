const mysql = require('mysql2');
const api = require('express').Router();

const moviesRouter = require('./movies');
const reviewsRouter = require('./reviews');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  }
);

api.use('/movies', moviesRouter(db));
api.use('/reviews', reviewsRouter(db));

module.exports = api;