let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function render() {
    for (let book in myLibrary) {
        console.log(book)
    }
}