function getAllPizzas(req, res) {
    const Pizza = require('../../api/models/modelsapp');
    Pizza.find({}, function(err, pizzas) {
    if (err) throw err; 
        res.json(pizzas);
    });
}
function getOnePizza(req, res) {
    const Pizza = require('../../api/models/modelsapp');
    Pizza.find({_id : req.params.id}, function(err, pizza) {
    if (err) throw err;
        res.json(pizza);
    });
}
function insertPizza(req, res) {
    const Pizza = require('../../api/models/modelsapp');
    const newPizza = Pizza ({
        title: req.body.title,
        prix : req.body.prix,
        plat_du_jour : req.body.plat_du_jour,
        url : req.body.url,
        composition : [{
            base : req.body.base,
            topping : [{
                t1 : req.body.t1,
                t2 : req.body.t2,
                t3 : req.body.t3,
                t4 : req.body.t4,
                t5 : req.body.t5,
                t6 : req.body.t6,
                t7 : req.body.t7,
                t8 : req.body.t8,
                t9 : req.body.t9,
                t10 : req.body.t10
            }]
        }]
    });
    newPizza.save(function(err) {
        if (err) throw err;
            res.json({info: 'PizzaAdded'});
    });
}
function getPDJ(req, res) {
    const Pizza = require('../../api/models/modelsapp');
    Pizza.find({plat_du_jour : 'true' }, function(err, pizza){
        if (err) throw err;
            res.json(pizza);
    });
}

function deleteAllPDJ(req, res) {
    const Pizza = require('../../api/models/modelsapp');
    Pizza.deleteMany(
        {plat_du_jour : 'true'}, function(err, pizzas) {
        if (err) throw err;
            res.json({info : 'All plat_du_jour deleted'});
    });
}
function deleteOnePizzaByTitle(req, res) {
    const Pizza = require('../../api/models/modelsapp');
    Pizza.findOneAndRemove(
        {title : req.body.title}, function(err, pizzas) {
        if (err) throw err;
            res.json({info : 'The pizza ' + req.body.title + ' has been deleted'});
        });
}
module.exports.getAllPizzas = getAllPizzas;
module.exports.getOnePizza = getOnePizza;
module.exports.insertPizza = insertPizza;
module.exports.getPDJ = getPDJ;
module.exports.deleteAllPDJ = deleteAllPDJ;
module.exports.deleteOnePizzaByTitle = deleteOnePizzaByTitle;