const mongoose = require('mongoose')

const schema = mongoose.Schema({
    ExpenseID: {type:Number,unique:true},
    Category: String,
    Amount: Number,
    Date: String,
    Description: String,
},{versionKey:false});

module.exports = mongoose.model("Expense", schema)