const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    customerName: String,
    item: String|| Number,
    price: Number
})


const Order = mongoose.model('order',orderSchema)

module.exports = Order 