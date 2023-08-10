const axios = require('axios');

const newItem = {
  name: 'Sodium Bromide',
  quantity: 100,
  manufacturingDate: '2023-01-01',
  expirationDate: '2024-08-01',
  isExpired: false
};

const backendURL = 'http://44.211.192.49:5000/api'; // Replace with your EC2's public IP

axios.post(`${backendURL}/items`, newItem)
  .then(response => {
    console.log('Item added successfully:', response.data);
  })
  .catch(error => {
    if (error.response) {
      console.error('Error adding item:', error.response.data);
    } else {
      console.error('Error adding item:', error.message);
    }
  });
