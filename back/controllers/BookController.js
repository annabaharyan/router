const uniqid = require("uniqid")
class Book{
    static books = []

    static addBook(req, res){
        req.body.id = uniqid()
        Book.books.push(req.body)
        return res.send({success:"OK", book:req.body})
    }

    static getBooks(req, res){
        res.send({items:Book.books})

    }

    static getBook(req, res){
        let id = req.params.id
        let book = Book.books.find(a => a.id == id)
        if(book){
            let others = Book.books.filter(a => a!=book && a.author == book.author)
            
            res.send({book, others})
        }else{
            res.send({error:"NO SUCH BOOK!"})
        }
    }

    static deleteBook(req, res){
        const id = req.params.id
        Book.books.splice(Book.books.findIndex(a => a.id == id),1)
        res.send({success:"OK"})
    }

    static updateBook(req, res){
        const id = req.params.id
        const book = req.body
        
        let current = Book.books.findIndex(a => a.id == id)
        Book.books[current] = book
        
        return res.send({success:"OK"})

    }
    
}
module.exports =  Book