const password  = require('../models/password');

module.exports = (req, res, next)=> {
    if(!password.validate(req.body.password)){
        return res.status(400).json({error: 'le mot de passe doit contenir majuscule, minuscule, chiffre et caractère spécial'});
    }
    next();
}