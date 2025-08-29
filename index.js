const express = require("express")
const cors = require("cors")
const connectdb = require("./config/db.config")
const authorRouter = require("./router/author.routes")
const bookRouter = require("./router/book.routes")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

connectdb()


//// Router ////
app.use(authorRouter)
app.use(bookRouter)

app.listen(PORT, () => {
    console.log("server is running at: " + PORT);
})


