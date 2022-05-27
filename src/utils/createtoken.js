const jwt = require("jsonwebtoken");
const cfg = require("../config/cfg");

const create_token = (id, user,email) => {
   return jwt.sign({id:id,user:user,email:email},
      cfg.jwt_secret,
        {expiresIn:cfg.jwt_expires});
}
module.exports = create_token;