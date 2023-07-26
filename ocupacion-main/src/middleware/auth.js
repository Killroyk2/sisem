const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(500).json({ message: 'No se ingreso un token' });
    }
  
    console.log(token);
    console.log(process.env.SECRETKEYJWT);
    
    jwt.verify(token, process.env.SECRETKEYJWT, (err, decoded) => {
      if (err) {
        return res.status(500).json({ message: 'Token Invalido' });
      }

      req.user = decoded;
      next();
    });
  };

  module.exports = validateToken;
