"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, serve_favicon_1.default)(path_1.default.join(__dirname, '..', 'public', 'favicon.ico')));
app.use((0, morgan_1.default)('common'));
app.use(body_parser_1.default.json()); // Enable middleware to parse JSON requests
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
const res_style_info = "<style>body { font-size: x-large; text-align: center; margin: 2rem; }</style>";
// GET routes
app.get('/', (req, res) => {
    res.status(400).send(res_style_info + 'Invalid endpoint.');
});
app.get('/api', (req, res) => {
    res.status(400).send(res_style_info + 'Invalid endpoint.');
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
    res.json(req.body); // TEST
});
// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
