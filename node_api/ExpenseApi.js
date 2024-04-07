const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./model/Expense')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectionString = 'mongodb+srv://mrtoxic781:Toxic662@toxiccluster.wll1cxe.mongodb.net/Student662?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(() => {
    console.log("Connected with DB");
    const app = express();

    app.use(express.json());
    app.use(bodyParser.urlencoded());
    app.use(cors());

    app.get('/', async (req, res) => {
        const result = await Expense.find();
        res.json(result);
    })

    app.get('/expense/:id', async (req, res) => {
        const result = await Expense.findOne({ ExpenseID: req.params.id });
        res.json(result);
    });

    app.post('/expense/add', async (req, res) => {
        const result = await Expense.create(req.body);
        res.json(result);
    });

    app.put('/expense/edit/:id', async (req, res) => {
        const result = await Expense.findOneAndUpdate({ ExpenseID: req.params.id }, req.body);
        res.json(result);
    });

    app.delete('/expense/:id', async (req, res) => {
        const result = await Expense.deleteOne({ ExpenseID: req.params.id });
        res.json(result);
    });

    app.listen(4000, () => {
        console.log("listening on 4000 at http://localhost:4000");
    });
});