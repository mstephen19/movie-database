const reviews = require('express').Router();

reviews.route('/:id')
  .get((req, res)=>{
    const movieId = req.params.id;
    db.query('SELECT movies.movie_name, reviews.review FROM reviews INNER JOIN movies ON movies.id = reviews.movie_id WHERE movies.id = ?', movieId, (err, results)=>{
      err ? console.log(err) : null;
      res.json(results)
    })
  })
  .put((req, res)=>{
    const movieReview = req.body.review;
    const movieId = req.body.movie_id;
    db.query('UPDATE reviews SET review = ? WHERE movie_id = ?', [movieReview, movieId], (err, results)=>{
      err ? console.log(err) : null;
      res.send(`Review added!`)
    });
  });

module.exports = reviews;

// SELECT movies.movie_name, reviews.review
// FROM reviews
// INNER JOIN movies ON movies.id = reviews.movie_id