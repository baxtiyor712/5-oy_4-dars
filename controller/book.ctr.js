const BookSchema = require("../schema/bookschema");

const getAllBooks = async (req, res) => {
    try {
        const books = await BookSchema.find()

        res.status(200).json(books)
    } catch (error) {
        console.log(error.message);

    }
}
///////////////////////////////////////////////////////////
const addBook = async (req, res) => {
    try {
        const {
            title, authorId, period, peges, pablishedYear, genre, pablishedHome, desc
        } = req.body

        await BookSchema.create({ title, authorId, period, peges, pablishedYear, genre, pablishedHome, desc })

        res.status(201).json({
            message: "Added new book"
        })
    } catch (error) {
        console.log(error.message);

    }
}
//////////////////////////////////////////////
const getOneBook = async (req, res) => {
    try {
        const { id } = req.params

        const foundeBook = await BookSchema.findById(id)

        if (!foundeBook) {
            return res.status(404).json({
                message: "book not found"
            })
        }

        res.status(200).json(foundeBook)
    } catch (error) {
        console.log(error.message);

    }
}
///////////////////////////////////////////////////////
const updateBook = async (req, res) => {
    try {
        const { id } = req.params

        const foundeBook = await BookSchema.findById(id)

        if (!foundeBook) {
            return res.status(404).json({
                message: "book not found"
            })
        }

        await BookSchema.findByIdAndUpdate(id, 
            {title, authorId, period, peges, pablishedYear, genre, pablishedHome, desc },{new: true})

            res.status(201).json({
                message: " book updated "
            })
    } catch (error) {
        console.log(error.message);

    }
}
/////////////////////////////////////////////////////////
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params

        const foundeBook = await BookSchema.findById(id)

        if (!foundeBook) {
            return res.status(404).json({
                message: "book not found"
            })
        }

        await BookSchema.findByIdAndDelete(id)

        res.status(201).json({
            message: "book deleted"
        })
    } catch (error) {
        console.log(error.message);

    }
}

module.exports = {
    getAllBooks,
    addBook,
    getOneBook,
    updateBook,
    deleteBook
}