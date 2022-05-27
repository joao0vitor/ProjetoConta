const jwt = require("jsonwebtoken");
const cfg = require("../config/cfg");

const verify_token = (req, res, next) =>{

    const token = req.headers.token;

    if(!token)return res.status(401).send({output: `Access Denied`});
    jwt.verify(token, cfg.jwt_secret, (error, same) =>{
        if(error)return res.status(401).send({output:`Erro ao verificar token -> ${error}`});
        if(!same)return res.status(401).send({output: `Erro de autenticação`});
        next()
    })
}
module.exports = verify_token