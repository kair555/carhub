const express = require('express');
const router = express.Router();

const vehicles = [
  { id: 1, make: 'Hyundai', model: 'Sonata', year: 2023 },
  { id: 2, make: 'Kia', model: 'K5', year: 2024 },
];

router.get('/', (req, res) => {
  res.json({ data: vehicles, count: vehicles.length });
});

router.get('/:id', (req, res) => {
  const vehicle = vehicles.find(v => v.id === Number(req.params.id));
  if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
  res.json({ data: vehicle });
});

module.exports = router;
