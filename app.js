const express = require('express');
const app = express();

const dotenv = require('dotenv')
dotenv.config()

const port = process.env.API_PORT;


// Define routes
app.get('/api', (req, res) => {
    res.send('Test.')
  })

app.get('/api/hello', (req, res) => {
    res.send('Hello, World!');
});

// Start
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});