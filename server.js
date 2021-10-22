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
);

app.get('/api/movies', (req, res)=>{
  db.query('SELECT * FROM movies', (err, results)=>{
    err ? console.log(err) : null;
    res.json(results);
  });
});

app.post('/api/add-movie', (req, res)=>{
  const movieTitle = req.body.title
  db.query('INSERT INTO movies(movie_name) VALUES(?)', movieTitle, (err, results)=>{
    err ? console.log(err) : null;
    res.send(`${req.body.title} added to the database!`)
  });
});

app.put('/api/update-review', (req, res)=>{
  const movieReview = req.body.review;
  const movieId = req.body.movie_id;
  db.query('UPDATE reviews SET review = ? WHERE movie_id = ?', [movieReview, movieId], (err, results)=>{
    err ? console.log(err) : null;
    res.send(`Review added!`)
  })
});

app.delete('/api/movie/:id', (req, res)=>{
  const movieId = req.params.id;
  db.query('DELETE FROM movies WHERE id = ?', movieId, (err, results)=>{
    err ? console.log(err) : null;
    res.send(`Movie deleted!`)
  })
});


app.listen(PORT, _=> console.log(`Listening on https://localhost:${PORT}`));