const controllers = require('../controllers/controllersap');
const router = require('express').Router();

router.get('/api/shows', (req, res) => {
    controllers.getAllPizzas(req, res);
});

router.get('/api/show/:id', (req, res) => {
    controllers.getOnePizza(req, res);
});

router.post('/api/insertone', (req, res) => {
    controllers.insertPizza(req, res);
});
router.get('/api/getpdj', (req, res) =>{
    controllers.getPDJ(req, res);
});
router.delete('/api/deletepdj', (req, res) =>{
    controllers.deleteAllPDJ(req, res);
});
router.delete('/api/deleteone', (req, res) =>{
    controllers.deleteOnePizzaByTitle(req, res);
});
module.exports = router;