const express = require('express');
// criar rotas
const customerRoutes = require('./routes/CustomerRoutes');
const orderRoutes = require('./routes/OrderRoutes');
const app = express();
const port = 3000;
// para permitir o uso de json no body das reqs.
app.use(express.json());
app.use(customerRoutes);
app.use(orderRoutes);

app.listen(port, () => {
  console.log("Servidor rodando em http://localhost:"+port);
});
