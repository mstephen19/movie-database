const express = require('express');
const mysql = require('mysql2');
const api = require('./routes/api');
// const { uuidv4 } = require('uuid');

const PORT = process.env.PORT || 6660;

const app = express();

app.use('/api', api);
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  }
);

app.listen(PORT, _=> console.log(`Listening on https://localhost:${PORT}`));