const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Item Schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Item Model
const Item = new Model('Item', itemSchema);

module.exports = Item;