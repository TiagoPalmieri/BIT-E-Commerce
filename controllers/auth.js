const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next)=>{
    const token = req.cookies.token;

    if (!token) return res.status(403).send('No token provided');

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if (err) return res.redirect('/login');

        req.user.name = decoded.name;
        next();
    });
};
