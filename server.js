const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 6660;

const app = express();

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
)

app.get('/api/movies', (req, res)=>{
  // db.query
  // res.json()
})

app.post('/api/add-movie', (req, res)=>{
  // db.query
  // res.send('added movie!')
})

app.put('/api/update-review', (req, res)=>{
  // db.query
  // Object.keys(req.query)
  // THE MOVIE TO UPDATE REVIEW OF IS QUERY
  // ?movie="" MOVIE'S NAME
  // res.send('Updated Movie review!')
})

app.delete('/api/movie/:id', (req, res)=>{
  // db.query
  // req.params.id DO SMTH WITH THIS
})


app.listen(PORT, _=> console.log(`Listening on https://localhost:${PORT}`));