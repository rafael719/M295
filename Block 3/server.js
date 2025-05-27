import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

// Add a console log to show we're starting up
console.log('Starting server...');

app.get('/', (request, response) => {
  console.log('Received request at /');
  response.send('Hello World!');
});

// New endpoint for temperature data
app.get('/temperature/:plz', async (request, response) => {
  try {
    const plz = request.params.plz;
    // Format PLZ for API (append '00')
    const formattedPlz = plz + '00';
    const url = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${formattedPlz}`;

    console.log(`Fetching temperature for PLZ: ${plz}`);
    const apiResponse = await fetch(url);
    
    if (!apiResponse.ok) {
      throw new Error(`API returned status: ${apiResponse.status}`);
    }
    
    const data = await apiResponse.json();
    console.log('Received data:', data); // Debug log
    
    response.json({
      plz: plz,
      temperature: data.currentWeather.temperature,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching temperature:', error);
    response.status(500).json({
      error: 'Failed to fetch temperature data',
      message: error.message
    });
  }
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