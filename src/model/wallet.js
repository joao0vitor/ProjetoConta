const mongoose = require("mongoose");

const schema_wallet = new mongoose.Schema({
    cardname:{type:String, require:true},
    balance:{type:Number, require:true},
    cartlimit:{type:Number, require:true},
    usebalance:{type:Number, require:true},
    iduser:{type:String, require:true}
});

module.exports = mongoose.model("Wallet", schema_wallet);