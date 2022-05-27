// importando o modulo mongoose e referenciando na constante nomeada mongoose

const mongoose = require("mongoose");

// construindo um esquema de dados que representa os campos que serão cadastrados por esse usuário

const schema_user = new mongoose.Schema({
    fullname:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    phone:{type:String},
    user:{type:String, require:true, unique:true},
    password:{type:String, require:true}
});

// exportando o modelo de dados do usuário para que fique visivel para toda a aplicação

module.exports = mongoose.model("Users", schema_user);