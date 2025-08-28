const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
  async CadastrarOrder(req, res) {
    //const { id } = req.params;
    const { customerId, orderDate, totalAmount } = req.body;
    console.log("id:"+customerId)

    try {
      const novaOrder = await prisma.order.create({
        //where: {customerId: parseInt(id) },
        data: {
          orderDate: new Date(orderDate),
          totalAmount,
          customerId ,
        },
      });
      res.status(201).json(novaOrder);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Falha ao cadastrar nova order' });
    }
  },

  async ListarTodosOrders (req, res) {
    try {
      const orders = await prisma.order.findMany();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao listar orders' });
    }
  },

  async ListarOrder (req, res) {
    const { id } = req.params;
    // console.log("idorder: "+id);

    try {
      const order = await prisma.order.findUnique({
        where: { id: parseInt(id) },
      });
      if (!order) {
        return res.status(404).json({ error: 'Order não encontrada' });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao listar order' });
    }
  },


  async AtualizarOrder (req, res) {
    const { id } = req.params;
    const { orderDate, totalAmount, customerId} = req.body;
    try {
      const orderAtualizado = await prisma.order.update({
        where: { id: parseInt(id) },
        data: {
          orderDate,
          totalAmount,
          customerId,
        },
      });
      res.status(200).json(orderAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao atualizar order' });
    }
  },

  async DeletarOrder (req, res) {
    const { id } = req.params;
    try {
      await prisma.order.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Falha ao deletar order' });
    }
  }
}
