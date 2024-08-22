const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;

    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(DB_URI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
    }
module.exports = dbConnect;