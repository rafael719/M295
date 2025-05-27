const express = require('express');
const app = express();
const port = 3000;

// Add a console log to show we're starting up
console.log('Starting server...');

app.get('/', (request, response) => {
  console.log('Received request at /');
  response.send('Hello World!');
});

// Add error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log('Try opening this URL in your browser!');
});