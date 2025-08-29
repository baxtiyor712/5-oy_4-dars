const {Router} = require("express")
const { getAllAuthors, getOneAuthor, addAuthor, updateAuthor, deleteAuthor } = require("../controller/author.ctr")

const authorRouter = Router()

authorRouter.get("/get_all_authors", getAllAuthors)
authorRouter.get("/get_one_author/:id", getOneAuthor)
authorRouter.post("/add_author", addAuthor)
authorRouter.put("/authors/:id", updateAuthor);
authorRouter.delete("/authors/:id", deleteAuthor);


module.exports = authorRouter