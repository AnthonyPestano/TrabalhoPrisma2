const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());


// ----- CRUD Order -----

// Cadastrar Order (precisa customerId)
app.post('/CadastrarOrder', async (req, res) => {
    const { orderDate, totalAmount, customerId } = req.body;
    try {
      const order = await prisma.order.create({
        data: {
          orderDate: orderDate ? new Date(orderDate) : undefined,
          totalAmount,
          customerId
        }
      });
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Listar todos Orders(com dados do customer)
  app.get('/ListarOrder', async (req, res) => {
    const orders = await prisma.order.findMany({
      include: { customer: true }
    });
    res.json(orders);
  });
  
  // Atualizar Order
  app.put('/AtualizarOrder/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { orderDate, totalAmount, customerId } = req.body;
    try {
      const order = await prisma.order.update({
        where: { id },
        data: {
          orderDate: orderDate ? new Date(orderDate) : undefined,
          totalAmount,
          customerId
        }
      });
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Deletar Order
  app.delete('/DeletarOrder/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await prisma.order.delete({ where: { id } });
      res.json({ message: 'Order deleted' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
  