'use strict'

let books = [];
const testing = true;

const display = document.querySelector("#book-display");

function BIDmanager(startingSize = 100) {
    this.prototype.size = Number(startingSize) ?? 100;
    this.prototype.bids = []

    for(let i = 0; i < this.prototype.size; i++) {
        bids.push(i);
    }

    this.getNewId = () => {
        if(bids.length < 3) {
            const oldSize = this.prototype.size;
            this.prototype.size = 2 * this.prototype.size;

            for(let i = oldSize; i < this.prototype.size; i++) {
                bids.push(i);
            }
        }

        return bids.shift();
    }

    this.retireOldId = (oldId) => {
        let num = Number(oldId) ?? -1;

        if(num > -1) {
            bids.push(num);
        }
    }
}

const bidManager = new BIDmanager();

function Book(title, author, pages, readPages = 0, read = false) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.readPages = Number(readPages);
    this.read = Boolean(read) || (pages == readPages);

    Object.defineProperty(this, "title", {
        writable: false,
    });
    
    Object.defineProperty(this, "author", {
        writable: false,
    });

    Object.defineProperty(this, "pages", {
        writable: false,
    });

    Object.defineProperty(this, "bid", {
        value: getNewId(),
        enumerable: true,
        writable: false,
        configurable: false 
    });

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
}

function updateDisplay() {
    // TODO, adds new books to display, removes old ones
    let cards = document.querySelectorAll(".card");

    display.childNodes.
}

function addBook(book, update = true) {
    books.push(book);

    if(update) {
        updateDisplay();
    }
}

function removeBook(book, update = true) {
    let index = books.indexOf(book);

    if(index !== -1) {
        books.splice(index, 1);
        bidManager.retireOldId(book.bid);

        if(update) {
            updateDisplay();
        }
    }
}

if(testing) {
    addBook(new Book("Hail Mary", "Andy Weir", 620, 620));
    addBook(new Book("Working Backwards", "Ex amazon people", "411", "328"));
    addBook(new Book("From Third World to First", "Lee Kuan Yew", 606, 0));
}
