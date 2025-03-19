// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
  const comments = [
    { name: 'John', message: 'Hello!' },
    { name: 'Jane', message: 'Hi!' },
  ];
  res.json(comments);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
