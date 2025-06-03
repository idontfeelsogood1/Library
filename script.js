const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readStatusChange = function () {
        this.read === 'Yes' ? this.read = 'No' : this.read = 'Yes';
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBook() {
    let display = document.querySelector("#library");
    
    // clear book before adding in another
    display.innerHTML = '';
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

        // card remove and read button element
        let removeBtn = document.createElement("button");
        let readBtn = document.createElement("button");

        removeBtn.classList.add("removeBtn");
        readBtn.classList.add("changeReadBtn");

        removeBtn.innerText = "Remove";
        removeBtn.setAttribute("type", "button");
        removeBtn.addEventListener("click", () => {
            card.remove();
        })

        readBtn.innerText = "Read";
        readBtn.setAttribute("type", "button");
        readBtn.addEventListener("click", () => {
            book.readStatusChange();
            bookRead.innerText = "Read yet ?: " + book.read;
        })

        // Add everything to card
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
        card.appendChild(removeBtn);
        card.appendChild(readBtn)
        
        // Add card to display
        display.appendChild(card);
    }
}

function createNewBook() {
    document.querySelector("#new-book").addEventListener("click", () => {
        document.querySelector("dialog").showModal();
    })
    document.querySelector("#confirmBtn").addEventListener("click", (event) => {
        event.preventDefault();

        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let read = document.querySelector("#read").value;

        addBookToLibrary(title, author, pages, read);
        displayBook();

        document.querySelector("dialog").close();
    })
}

// main
addBookToLibrary("The Hobbit", "J.R.R Tolken", "300", "No");
addBookToLibrary("1984", "George Orwell", "328", "Yes");
addBookToLibrary("Atomic Habits", "James Clear", "288", "Yes");
displayBook();
createNewBook();