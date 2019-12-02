const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PizzaSchema = new Schema(
{
    title : String,
    prix : {
        type : Number,
        default : "3"
    },
    plat_du_jour : {
		type : Boolean,
		default : false
    },
    url : {
        type : String,
        default : false,
        trim : true
    },
    composition : [{
        base : String,
        topping : [{
            t1 : {type : String, default : "Rien"},
            t2 : {type : String, default : "Rien"},
            t3 : {type : String, default : "Rien"},
            t4 : {type : String, default : "Rien"},
            t5 : {type : String, default : "Rien"},
            t6 : {type : String, default : "Rien"},
            t7 : {type : String, default : "Rien"},
            t8 : {type : String, default : "Rien"},
            t9 : {type : String, default : "Rien"},
            t10 : {type : String, default : "Rien"}
        }]
    }]
});

module.exports = mongoose.model('Pizza',PizzaSchema);
