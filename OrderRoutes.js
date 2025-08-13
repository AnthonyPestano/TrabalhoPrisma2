const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();
// CRUD
router.get('/ListarOrder', OrderController.ListarOrder);
router.delete('/DeletarOrder/:id', OrderController.DeletarOrder);
router.post('/CadastrarOrder', OrderController.CadastrarOrder);
router.put('/AtualizarOrder/:id', OrderController.AtualizarOrder); 

module.exports = router;