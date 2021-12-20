module.exports = function auth(req, res, next){

    let {admin, name} = res.locals.user;

    if(admin) {
        console.log(`bienvenido ${name}, sos admin`)
    } else {
        console.log(`${name} no sos admin`)
    }
    console.log(admin)

    next();
}