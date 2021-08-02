const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const mongo = 'mongodb+srv://rickdev:abril1997@cluster0.us2mq.mongodb.net/item-database?retryWrites=true&w=majority';

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