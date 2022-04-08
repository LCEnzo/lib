'use strict'

let books = [];
const testing = true;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
}

function addBookToLib(book) {
    books.push(book);
}

if(testing) {
    addBookToLib(new Book("Hail Mary", "Andy Weir", "620", "620"));
    addBookToLib(new Book("Working Backwards", "Ex amazon people", "411", "328"));
    addBookToLib(new Book("From Third World to First", "Lee Kuan Yew", "606", "0"));
}
