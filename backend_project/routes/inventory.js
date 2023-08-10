const express = require('express');
const router = express.Router();
const db = require('./db');

// Create a new inventory item
router.post('/items', (req, res) => {
    const newItem = req.body;
    const sql = 'INSERT INTO items (name, quantity, manufacturingDate, expirationDate, isExpired) VALUES (?, ?, ?, ?, ?)';
    const values = [newItem.name, newItem.quantity, newItem.manufacturingDate, newItem.expirationDate, newItem.isExpired];

db.execute(sql, values)
  .then(result => {
    res.status(201).json({ message: 'Item added successfully', item: newItem });
  })
  .catch(err => {
    console.error('Error inserting item:', err);
    res.status(500).json({ message: 'Error inserting item' });
  });

 });


// Retrieve all inventory items
router.get('/items', (req, res) => {
    const sql = 'SELECT * FROM items';

    db.execute(sql)
        .then(result => {
            res.status(200).json(result[0]);
        })
        .catch(err => {
            console.error('Error retrieving items:', err);
            res.status(500).json({ message: 'Error retrieving items' });
        });
});




module.exports = router;

