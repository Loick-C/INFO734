const controllers = require('../controllers');
const router = require('express').Router();

router.get('/commande/shows', (req, res) => {
    controllers.getAllCommandes(req, res);

});
router.get('/commande/show/:id', (req, res) => {
    controllers.getOneCommande(req, res);

});
router.post('/commande/insertone', (req, res) => {
    controllers.insertCommande(req, res);
});
router.delete('/commande/deleteone', (req, res) =>{
    controllers.deleteOneCommandeById(req, res);
});

module.exports = router;