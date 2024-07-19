const jwt = require('jsonwebtoken');

const authHeader = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(403)

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if (err) return res.status(500);

        req.user = decoded;
        next();
    });
};

module.exports = authHeader;