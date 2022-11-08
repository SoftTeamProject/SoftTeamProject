//Agregado por Santiago 8/11
module.exports = func => (req, res, next) =>
    Promise.resolve(func(req,res,next))
        .catch(next)