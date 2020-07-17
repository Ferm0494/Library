import {
    hideOutputs
} from './render.js'

let myLibrary = [];
const showForm = document.getElementsByTagName('button')[1];
const row = document.getElementsByClassName('row')[0]
const form = document.getElementsByTagName('form')[0]


function Book(title, author, pages, status) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status
}

const addBookToLibrary = () => {

    let childrenForm = form.children
    let title = childrenForm[1].value
    let author = childrenForm[3].value
    let pages = childrenForm[5].value
    let status = childrenForm[7].checked

    if (title !== "" && author !== "" && pages !== "") {
        let book = new Book(title, author, pages, String(status));
        myLibrary.push(book)
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }

}

const removeBook = (id, node) => {

    node.remove()
    myLibrary.splice(id, 1);
    console.log(myLibrary)
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

    // render();
}

const render = () => {

    // localStorage.clear();
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    if (myLibrary === null) {
        myLibrary = []
    }

    console.log(myLibrary);

    let div = document.getElementsByClassName("book")


    for (let i = 0; i < myLibrary.length; i++) {
        let node = div[0].cloneNode(true);
        node.classList.remove('d-none');
        node.setAttribute('data-attribute', i);
        let nodeChildrens = node.children;


        nodeChildrens[0].innerHTML = `Title: ${myLibrary[i].title}`
        nodeChildrens[1].innerHTML = `Author: ${myLibrary[i].author}`
        nodeChildrens[2].innerHTML = myLibrary[i].pages + ' pages'

        nodeChildrens[4].addEventListener("click", function() {
            removeBook(i, node);
        })





        if (myLibrary[i].status === 'true') {
            let btnStatus = nodeChildrens[3]
            btnStatus.innerHTML = 'Already read';
            btnStatus.className = ""
            btnStatus.classList.add('btn', 'btn-success', 'py-2', 'w-75');
        }
        row.appendChild(node)
    }


}

const showAddForm = () => {

    form.classList.remove('d-none');
    let buttonCreate = document.getElementsByName('createBook')[0];
    buttonCreate.addEventListener('click', addBookToLibrary)
    document.body.style.background = '#686868'
    hideOutputs(showForm, row)
}

render();
showForm.addEventListener('click', showAddForm)