const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commandeSchema = new Schema({
    datee : Date,
    nom : String,
    prenom : String,
    article1 : {
        type : String,
        default : true
    },
    article2 : {type : String, default : false},
    article3 : {type : String, default : false},
    article4 : {type : String, default : false},
    article5 : {type : String, default : false},
    article6 : {type : String, default : false},
    article7 : {type : String, default : false},
    article8 : {type : String, default : false},
    article9 : {type : String, default : false},
    article10 : {type : String, default : false}
});

module.exports = mongoose.model('commande',commandeSchema);
