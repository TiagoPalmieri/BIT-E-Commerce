const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const billingRoutes = require('./routes/billingRoutes');
const imageRoutes = require('./routes/imageRoutes');
const productRoutes = require('./routes/productRoutes');
const publicationRoutes = require('./routes/publicationRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const sellRoutes = require('./routes/sellRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')


const authToken = (req, res, next) => {
    const token = req.cookies['jwt']; // Nombre de la cookie que contiene el JWT

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
            if (err) {
                return res.status(401).send('Token inválido o expirado');
            } else {
                req.user = decodedToken; // Almacena el usuario decodificado en req.user
                next();
            }
        });
    } else {
        res.status(401).send('Token no proporcionado');
    }
};


const app = express();

const corsOptions = {
    origin : '*',
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders : ['Content-type', 'Authorization', 'Cookie'],
    credentials: true
}

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
