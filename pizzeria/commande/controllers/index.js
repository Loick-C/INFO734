function getAllCommandes(req, res) {
    const Commande = require('../../commande/models');
    Commande.find({}, function(err, commandes) {
        if (err) throw err;
            res.json(commandes);
        });
}
function getOneCommande(req, res) {
    const Commande = require('../../commande/models');
    Commande.find({_id: req.params.id}, function(err,commande) {
        if(err) throw err;
            res.json(commande);
    });
}
function insertCommande(req, res) {
    const Commande = require('../../commande/models');
    const newCommande = Commande ({
        datee : Date(),
        nom : req.body.nom,
        prenom : req.body.prenom,
        article1 : req.body.article1,
        article2 : req.body.article2,
        article3 : req.body.article3,
        article4 : req.body.article4,
        article5 : req.body.article5,
        article6 : req.body.article6,
        article7 : req.body.article7,
        article8 : req.body.article8,
        article9 : req.body.article9,
        article10 : req.body.article10,
    });
    newCommande.save(function(err) {
        if (err) throw err;
            res.json({info: 'CommandeAdded'});
    });
}
function deleteOneCommandeById(req, res) {
    const commande = require('../../commande/models');
    commande.findOneAndDelete(
        {_id : req.body.id}, function(err, commande) {
        if (err) throw err;
            res.json({info : 'The commande ' + req.body.id + ' has been deleted'});
        });
}
module.exports.getAllCommandes = getAllCommandes;
module.exports.getOneCommande = getOneCommande;
module.exports.insertCommande = insertCommande;
module.exports.deleteOneCommandeById = deleteOneCommandeById;



