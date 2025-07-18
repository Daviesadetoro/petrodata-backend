const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const retailRoutes = require('./routes/retail.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/retail-prices', retailRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
