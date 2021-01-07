const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostName = "localhost";
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html")
    res.end("<html><body>this is express server</body></html>")
});
// next is optional can be ignored

const server = http.createServer(app);
server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`);
});