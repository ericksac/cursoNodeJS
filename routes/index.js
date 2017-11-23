var express = require('express');
var router = express.Router();
//const esController = require('../controladores/esController');
const controllers = require('../controladores');
/* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  var array = [1,2,3];


router.get('/test', controllers.esControlador.getArray);
router.get('/test/:id', controllers.esControlador.getById);
  
router.post('/test', controllers.esControlador.postArray);
router.delete('/test1/:id', controllers.esControlador.deleteEsShow);
router.put('/test/:id', controllers.esControlador.updateEsShow);

//router.delete('/test/:id', controllers.esControlador.detete);
//router.get('/c2', controllers.controller2.getArray2);




module.exports = router;


