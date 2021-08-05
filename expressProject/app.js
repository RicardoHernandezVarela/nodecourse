const express = require('express');
const mongodb = require('./dbkey');
const mongoose = require('mongoose');
const Item = require('./models/items');

// Express app
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.static('static')); //static files folder

// Mongoose conf
mongoose.set('useFindAndModify', false);

// mongodb connection
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to the db ✌');
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

/****************************************************************************
 ******************************* ROUTES *************************************
 ***************************************************************************/

// create items (test)
app.get('/create-item', (req, res) => {
    const item = new Item({
        name: 'computer',
        price: 1750
    });

    item.save()
        .then((result) => res.send(result));
});

// get item by id (tets)
app.get('/get-item', (req, res) => {
    Item.findById('6108707e08ff2b2790b24244')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// Home page
app.get('/', (req, res) => {
    res.redirect('/all-items');
});

// get all items
app.get('/all-items', (req, res) => {
    Item.find()
        .then((result) => {
            res.render('index', {items: result, libs: ['index']});
        })
        .catch((err) => {
            console.log(err);
        });
});

// add new item
app.post('/save-item', (req, res) => {
    const item = new Item(req.body);

    item.save()
    .then((result) => {
        // console.log('result: ', result);
        res.redirect('/all-items');
    })
    .catch((err) => console.log(err));
});

// get item by id
app.get('/items/:id', (req, res) => {
    //console.log('id: ', req.params);

    Item.findById(req.params.id)
    .then((result) => {
        res.render('item-detail', {item: result, libs: ['delete']});
    })
    .catch((err) => {
        console.log(err);
    });
});

// delete item by id
app.delete('/items/:id', (req, res) => {
    //console.log('id: ', req.params);

    Item.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json({redirect: '/all-items'});
    })
    .catch((err) => {
        console.log(err);
    });
});

// edit item by id
app.put('/items/:id', (req, res) => {
    //console.log('body: ', req.body);

    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.json({msg: 'Updated successfully!'});
    })
    .catch((err) => {
        console.log(err);
    });
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