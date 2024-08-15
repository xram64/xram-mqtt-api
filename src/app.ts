import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import path from 'path';

const app = express();
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(morgan('common'))
app.use(bodyParser.json());  // Enable middleware to parse JSON requests

import dotenv from 'dotenv';
dotenv.config();

const port = process.env.API_PORT;

/*  [ API ]
 *  
 *  `/api/pub` :: Publish a message.
 *  
 *  `/api/get/:topic` :: Get the most recent messages on 'topic' in JSON form.
 * 
 *  `/api/read/:topic` :: Read the most recent messages on 'topic' in text/HTML form.
 *  
*/


// Define CSS styles for responses
const res_style_info = "<style>body { font-size: x-large; text-align: center; margin: 2rem; }</style>"


// GET routes
app.get('/', (req, res) => {
    res.status(400).send(res_style_info + 'Invalid endpoint.')
});
app.get('/api', (req, res) => {
    res.status(400).send(res_style_info + 'Invalid endpoint.')
});
app.get('/api/pub', (req, res) => {
    res.status(400).send(res_style_info + 'Invalid request. Use a POST request to publish messages.');
});


app.get('/api/info', (req, res) => {
    res.send(res_style_info + 'Use `/api/pub` to publish a new message...');
});


app.get('/api/read/:topic', (req, res) => {
    // Get specified topic from path
    const topic = req.params['topic'];

    // Return messages as an HTML page
    res.send('TODO');
});

app.get('/api/get/:topic', (req, res) => {
    // Get specified topic from path
    const topic = req.params['topic'];

    // Return messages as JSON data
    res.json({ todo: 'TODO' });
});

// POST routes
app.post('/api/pub', (req, res) => {
    res.json(req.body);  // TEST
});


// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});