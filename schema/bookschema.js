const { Schema, model } = require("mongoose")
const { type } = require("os")
const { title } = require("process")

const Book = new Schema({
    title: {
        type: String,
        allowNull: false
    },
    authorId: {
        type: String,
        allowNull: false
    },
    period: {
        type: String,
        allowNull: false
    },
    peges: {
        type: Number,
        allowNull: false
    },
    pablishedYear: {
        type: Date,
        allowNull: false
    },
    genre: {
        type: String,
        allowNull: false
    },
    pablishedHome: {
        type: String,
        allowNull: false
    },
    desc: {
        type: String,
        allowNull: false
    }

},
    {
        timeseries: true,
        versionKey: false
    }
)

const BookSchema = model("books", Book)
module.exports = BookSchema