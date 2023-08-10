const express = require('express');
const app = express();
const inventoryRoutes = require('./routes/inventory');
const cors = require('cors');

app.use(express.json());

// Use CORS middleware to allow requests from your frontend domain
//app.use(cors({ origin: 'http://34-239-108-225:3000' }));
app.use(cors({ origin: '*' }));

// Use the inventory routes
app.use('/api', inventoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

