const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();
// CRUD
router.get('/ListarTodosOrders', OrderController.ListarTodosOrders);
router.get('/ListarOrder/:id', OrderController.ListarOrder);
router.delete('/DeletarOrder/:id', OrderController.DeletarOrder);
router.post('/CadastrarOrder/:id', OrderController.CadastrarOrder);
router.put('/AtualizarOrder/:id/:customerid', OrderController.AtualizarOrder); 

//falta atualizar e cadastrar orders, e fazer o listar todos orders listar apenas os orders de X customer, e não de todos, e o listar order listar só aquela order

module.exports = router;
