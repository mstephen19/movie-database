const express = require('express');
const api = require('./routes/api');
// const { uuidv4 } = require('uuid');

const PORT = process.env.PORT || 6660;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.listen(PORT, _=> console.log(`Listening on https://localhost:${PORT}`));