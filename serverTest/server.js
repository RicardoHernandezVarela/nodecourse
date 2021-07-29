const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = '3000';

const server = http.createServer((req, res) => {
    // console.log(`Request URL: ${req.url}`);
    // console.log(`Request method: ${req.method}`);

    res.setHeader('Content-Type', 'text/html');
    let route = './templates/';
    switch (req.url) {
        case '/':
            route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            res.statusCode = 301;
            res.setHeader('Location', '/contact'); //redirect
            res.end();
            break;
        default:
            route += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(route, (err, data) => {
        if (err) {
            console.log('There was an error!!');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(port, hostname, () => {
    console.log(`Listening on port ${port}`);
});