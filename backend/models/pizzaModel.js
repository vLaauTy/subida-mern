const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { type: String, required: true }
})
const pizzaSchema = new mongoose.Schema({
    name: { type: String, require },
    variantes: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require }

}, {
    timestamps: true,
})

const pizzaModel = mongoose.model('pizzas', pizzaSchema)

const User = mongoose.model('User', userSchema)

module.exports = pizzaModel

exports.User = User;