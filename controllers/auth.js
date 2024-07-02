const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next)=>{
    const token = req.cookies.token;

    if (!token) return res.status(403).send('No token provided');

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if (err) return res.status(500).send('Failed to authenticate token');

        req.user = decodedToken;
        next();
    });
};