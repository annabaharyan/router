const express = require("express")
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser")
const BookController = require("./controllers/BookController")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.get("/api/books", BookController.getBooks)
app.get("/api/books/:id", BookController.getBook)
app.post("/api/books", BookController.addBook)
app.put("/api/books/:id", BookController.updateBook)
app.delete("/api/books/:id", BookController.deleteBook)

app.listen(5000, () => {
    console.log("server started on http://localhost:5000")
})