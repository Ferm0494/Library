/* eslint-disable import/extensions */
import
hideOutputs
  from './render.js';

import {
  myLibrary,
  showForm,
  row,
  form,
} from './globals.js';
/* eslint-enable import/extensions */

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
/* eslint-disable func-names */
Book.prototype.fillClass = function (res, btnStatus) {
  if (res) {
    btnStatus.innerHTML = 'Already read';
    btnStatus.className = '';
    btnStatus.classList.add('btn', 'btn-success', 'py-2', 'w-75');
  } else {
    btnStatus.innerHTML = 'Not read';
    btnStatus.className = '';
    btnStatus.classList.add('btn', 'btn-danger', 'py-2', 'w-75');
  }
};

Book.prototype.changeStatus = function (button, res) {
  this.fillClass(res, button);
  this.status = String(res);
  if (res) {
    button.addEventListener('click', () => {
      this.changeStatus(button, false);
    });
  } else {
    button.addEventListener('click', () => {
      this.changeStatus(button, true);
    });
  }
};
/* eslint-enable func-names */

const addBookToLibrary = () => {
  const childrenForm = form.children;
  const title = childrenForm[1].value;
  const author = childrenForm[3].value;
  const pages = childrenForm[5].value;
  const status = childrenForm[7].checked;

  if (title !== '' && author !== '' && pages !== '') {
    const book = new Book(title, author, pages, String(status));
    myLibrary.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }
};

const removeBook = (id, node) => {
  node.remove();
  myLibrary.splice(id, 1);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};

const render = () => {
  if (myLibrary === null) {
    myLibrary = [];
  }
  const div = document.getElementsByClassName('book');


  for (let i = 0; i < myLibrary.length; i += 1) {
    const node = div[0].cloneNode(true);
    node.classList.remove('d-none');
    node.setAttribute('data-attribute', i);
    const nodeChildrens = node.children;

    const book = new Book(
      myLibrary[i].title,
      myLibrary[i].author,
      myLibrary[i].pages,
      myLibrary[i].status,
    );


    nodeChildrens[0].innerHTML = `Title: ${book.title}`;
    nodeChildrens[1].innerHTML = `Author: ${book.author}`;
    nodeChildrens[2].innerHTML = `${book.pages} pages`;

    nodeChildrens[4].addEventListener('click', () => {
      removeBook(i, node);
    });

    const btnStatus = nodeChildrens[3];
    if (book.status === 'true') {
      book.changeStatus(btnStatus, true);
    } else {
      book.changeStatus(btnStatus, false);
    }
    row.appendChild(node);
  }
};


const showAddForm = () => {
  form.classList.remove('d-none');
  const buttonCreate = document.getElementsByName('createBook')[0];
  buttonCreate.addEventListener('click', addBookToLibrary);
  document.body.style.background = '#686868';
  hideOutputs(showForm, row);
};

render();
showForm.addEventListener('click', showAddForm);