const express = require('express');
const api = require('express').Router();

const app = require('../../Projects/express-form-project/routes');
const moviesRouter = require('./movies');
const reviewsRouter = require('./reviews');

app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);

module.exports = api;