const express = require('express');
const router = express.Router();

const CustomerController = require('../controllers/CustomerController');
// CRUD
router.get('/ListarTodosCustomers', CustomerController.ListarTodosCustomers);
router.get('/ListarCustomer/:id', CustomerController.ListarCustomer);
router.delete('/DeletarCustomer/:id', CustomerController.DeletarCustomer);
router.post('/CadastrarCustomer', CustomerController.CadastrarCustomer);
router.put('/AtualizarCustomer/:id', CustomerController.AtualizarCustomer); 

module.exports = router;

