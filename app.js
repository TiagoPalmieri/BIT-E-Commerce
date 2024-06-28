import express from 'express';
import { json, urlencoded } from 'body-parser';
import routes from './routes'

const app = express();

app.use('/api', routes)
app.use(json());
app.use(urlencoded({ extended: true }));

module.exports = app;