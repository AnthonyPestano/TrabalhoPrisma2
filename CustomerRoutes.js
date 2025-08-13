const express = require('express');
const router = express.Router();

const CustomerController = require('../controllers/CustomerController');
// CRUD
router.get('/ListarCustomer', CustomerController.ListarCustomer);
router.delete('/DeletarCustomer/:id', CustomerController.DeletarCustomer);
router.post('/CadastrarCustomer', CustomerController.CadastrarCustomer);
router.put('/AtualizarCustomer/:id', CustomerController.AtualizarCustomer); 

module.exports = router;

