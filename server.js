const express = require('express');
const mysql = require('mysql2');
const { uuidv4 } = require('uuid');

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
    database: 'OUR_DATABASE_NAME_db'
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


app.listen(PORT, _=> console.log(`Listening on https://localhost:${PORT}`));