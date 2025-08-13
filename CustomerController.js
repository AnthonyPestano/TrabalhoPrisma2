const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async ListarCustomer(req, res) {
    try {
      const Customer = await prisma.customer.findMany();
      res.status(200).json(Customer);
    } catch (error) {
      console.error('Erro ao listar clientes:', error);
      res.status(500).json({ error: 'Erro ao listar clientes' });
    }
  },

  async CadastrarCustomer(req, res) {
    try {
      const { name, email } = req.body;

      if (!name || !email ) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      const NovoCustomer = await prisma.customer.create({
        data: {
          name,
          email,
        },
      });

      res.status(201).json(NovoCustomer);
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      res.status(500).json({ error: 'Erro ao cadastrar cliente' });
    }
  },
  
  async DeletarCustomer(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ error: 'ID do cliente é obrigatório' });
      }

      const Customer = await prisma.customer.delete({
        where: { id: parseInt(id) },
      });

      res.status(200).json(Customer);
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
      res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
  },

  async AtualizarCustomer (req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      if (!id || !name || !email ) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      const CustomerAtualizado = await prisma.customer.update({
        where: { id: parseInt(id) },
        data: {
          name,
          email,
        },
      });

      res.status(200).json(CustomerAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
  }
}