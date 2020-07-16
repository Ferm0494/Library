let myLibrary;
let showForm = document.getElementsByTagName('button')[0];
showForm.addEventListener('click', showAddForm)

function Book(title, author, pages, status) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status
}

function addBookToLibrary() {
    let title = document.getElementById('ftitle')[0];
    let author = document.getElementById('fauthor').value;
    let pages = document.getElementById('fpages').value;
    let status = document.getElementById('status');
    console.log(`This is the text ${status}`)
    let book = new Book(title, author, pages, status);
    myLibrary.push(book)
    localStorage.setItem("myLibrary", myLibrary)


}

function render() {
    localStorage.clear()
    myLibrary = localStorage.getItem("myLibrary")
    if (myLibrary === null) {
        myLibrary = []
    }
    let container = document.getElementById("Container")
    for (let i = 0; i < myLibrary.length; i++) {
        var div = document.createElement('div');
        div.id = myLibrary[i].title;
        div.innerHTML = 'Title: ' + myLibrary[i].title;
        container.appendChild(div);
    }

}

function showAddForm() {
    const form = document.getElementsByTagName('form')[0];
    form.classList.remove('d-none');
    let buttonCreate = document.getElementsByName('createBook')[0];
    buttonCreate.addEventListener('click', addBookToLibrary)

    //form.style.position = 'relative;';
    //document.body.style.opacity = 0.5;
}
// Meta-data init
//addBookToLibrary(new Book('Crime and punishment', 'Fyodor Dostoyevsky', 500, true));
//addBookToLibrary(new Book('1984', 'George Orwell', 450, false));
render();