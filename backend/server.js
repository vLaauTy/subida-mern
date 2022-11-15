import data from "./data.js"
import express from "express";



const app = express();



app.use(express.json());



app.get("/api/getpizzas", (req, res) => {
    res.send(data.products)
});

app.get("/api/getpizzas/_id/:_id", (req, res) => {
    const product = data.products.find((x) => x._id === req.params._id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }

});

app.get("/api/getpizzas/:_id", (req, res) => {
    const product = data.products.find((x) => x._id === req.params._id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }

});



const port = process.env.PORT || 5000

app.listen(port, () => { console.log("server andando en el puerto " + port); })