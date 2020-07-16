let myLibrary = [];
let showForm = document.getElementsByTagName('button')[0];
showForm.addEventListener('click', showAddForm)

function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
}

function addBookToLibrary() {
    let title = document.getElementById('ftitle').value;
    let author = document.getElementById('fauthor').value;
    let pages = document.getElementById('fpages').value;
    let status = document.getElementById('status').checked;
    let book = new Book(title, author, pages, status);
    myLibrary.push(book)
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

}

function render() {
    //localStorage.clear();
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    if (myLibrary === null) {
        myLibrary = []
    }
    let container = document.getElementsByClassName("row")[0];
    for (let i = 0; i < myLibrary.length; i++) {
        var div = document.createElement('div');
        div.classList.add('my-flex','flex-column','bg-light', 'rounded', 'p-3', 'm-2', 'border', 'border-primary','col-3' );
        div.innerHTML = 'Title: ' + myLibrary[i].title +'<br>Author: ' + myLibrary[i].author +'<br>Pages: ' + myLibrary[i].pages;
        var btnStatus = document.createElement('button');
        btnStatus.innerHTML= 'Switch';
        btnStatus.classList.add('btn', 'btn-primary', 'py-2', 'w-75');
        div.appendChild(btnStatus);
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