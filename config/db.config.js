const mongoose = require("mongoose")

async function connectdb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        }).then(() => console.log( " ✅ Connected to mongoDB"))
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectdb

