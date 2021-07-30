const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', {root: __dirname});
});

app.use((req, res) => {
    res.sendFile('./views/error.html', {root: __dirname});
});