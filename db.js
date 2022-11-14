const mongoose = require("mongoose");

var MongoURL = 'mongodb+srv://lauti_32:lauti_32@cluster0.qywintz.mongodb.net/mern-pizza'

mongoose.connect(MongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log('Mongo DB Connection');
})

db.on('error', () => {
    console.log('Mongo DB Connection  ;(');
})

module.exports = mongoose