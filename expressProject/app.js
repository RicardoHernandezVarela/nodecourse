const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const mongodb = require('./dbkey'); 

app.listen(3000);

app.get('/', (req, res) => {
    const items = [
        {name: 'shoes', price: 250},
        {name: 't-shirt', price: 150},
        {name: 'jeans', price: 350}
    ];

    res.render('index', {items });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/add-item', (req, res) => {
    res.render('add-item');
});

app.use((req, res) => {
    res.render('error');
});