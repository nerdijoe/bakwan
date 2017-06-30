const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: String, required: true },
  pictures: [{ type: String, required: false }],
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
