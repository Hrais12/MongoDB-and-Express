const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({

    name : String,
    category : String,
    quantity : Number


})

const Inventory = mongoose.model('inventory', inventorySchema )

module.exports = Inventory