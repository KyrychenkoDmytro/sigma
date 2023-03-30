import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ProductModel from './models/Product.js';

mongoose.connect('mongodb+srv://admin:1q2w3e@cluster0.estzqnq.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/products', async (req, res) => {

    try {
        const products = await ProductModel.find().sort({discount: -1});

        if (!products) {
            return res.status(404).json({
                message: 'Error! Products not found.'
            })
        }

        res.json(products);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Connection error.'
        })
    }
});

app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server ok');
});