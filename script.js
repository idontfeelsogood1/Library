const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBook() {
    let display = document.querySelector("#library");
    for (let book of myLibrary) {
        let card = document.createElement("div");
        card.classList.add("book");
        
        // card header element
        let bookTitle = document.createElement("h2");
        bookTitle.innerText = book.title;

        // card info element
        let bookAuthor = document.createElement("p");
        let bookPages = document.createElement("p");
        let bookRead = document.createElement("p");

        bookAuthor.innerText = "Author: " + book.author;
        bookPages.innerText = "Pages: " + book.pages;
        bookRead.innerText = "Read yet ?: " + book.read;

        // Add everything to card
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
        
        // Add card to display
        display.appendChild(card);
    }
}

// main
addBookToLibrary("The Hobbit", "J.R.R Tolken", "300", "Yes");
displayBook();