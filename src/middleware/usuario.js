module.exports = function user(req, res, next){
    console.log('Estoy en el middleware.')
    res.locals.user = {
        "name": "nico",
        "admin": true,
        "id": 23
    }
    next();
}