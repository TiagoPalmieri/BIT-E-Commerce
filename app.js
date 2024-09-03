const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const authHeader = require('./controllers/auth');
const billingRoutes = require('./routes/billingRoutes');
const imageRoutes = require('./routes/imageRoutes');
const productRoutes = require('./routes/productRoutes');
const publicationRoutes = require('./routes/publicationRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const sellRoutes = require('./routes/sellRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const corsOptions = {
    origin : 'http://127.0.0.1:5500',
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders : ['Content-Type','Authorization', 'Cookie'],
    credentials: true
};

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/v1', billingRoutes);
app.use('/api/v1', imageRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', publicationRoutes);
app.use('/api/v1', sellerRoutes);
app.use('/api/v1', sellRoutes);
app.use('/api/v1', transactionRoutes);
app.use('/api/v1', userRoutes);

module.exports = app;
