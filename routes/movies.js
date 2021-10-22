function moviesFunc(db){
  const movies = require('express').Router();

  movies.route('/')
    .get((req, res)=>{
      db.query('SELECT * FROM movies', (err, results)=>{
        err ? console.log(err) : null;
        res.json(results);
      })
    })
    .post((req, res)=>{
      const movieTitle = req.body.title
      db.query('INSERT INTO movies(movie_name) VALUES(?)', movieTitle, (err, results)=>{
        err ? console.log(err) : null;
        res.send(`${req.body.title} added to the database!`)
      })
    })
    
  movies.delete('/:id', (req, res)=>{
    const movieId = req.params.id;
    db.query('DELETE FROM movies WHERE id = ?', movieId, (err, results)=>{
      err ? console.log(err) : null;
      res.send(`Movie deleted!`)
    })
  });
  return movies;
}

module.exports = moviesFunc;