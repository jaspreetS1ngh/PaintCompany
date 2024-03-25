
const jwt = require('jsonwebtoken');
require('dotenv').config();

function authentication(req, res, next) {
    const {authorization} = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized/ token missing or invalid' });
    }

    const token = authorization.split(' ')[1]; 

   
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
        req.user = user; 
        next(); 
    });
}

module.exports = {authentication};
