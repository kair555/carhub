const express = require('express');
const vehiclesRouter = require('./routes/vehicles');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/vehicles', vehiclesRouter);

app.get('/', (req, res) => {
  res.json({ message: 'CarHub API', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`CarHub running on port ${PORT}`);
});
