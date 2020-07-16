let myLibrary = [];
let addButton = document.getElementsByTagName('button')[0];
addButton.addEventListener('click', showAddForm)

function Book(title, author, pages, status) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status
}

function addBookToLibrary(book) {
    // alert("Cliked!")
    myLibrary.push(book)
}

function render() {
    let container = document.getElementById("Container")
    for (let i = 0; i < myLibrary.length; i++) {
        var div = document.createElement('div');
        div.id = myLibrary[i].title;
        div.innerHTML = 'Title: ' + myLibrary[i].title;
        container.appendChild(div);
    }
}

function showAddForm() {
    alert('Hello world!')

}
// Meta-data init
addBookToLibrary(new Book('Crime and punishment', 'Fyodor Dostoyevsky', 500, true));
addBookToLibrary(new Book('Title2', 'Author2', 200, false));
render();