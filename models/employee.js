const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({

    name: String,
    position: String

})

const Employee = mongoose.model('employee',employeeSchema)

module.exports = Employee