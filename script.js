let myLibrary = [];

let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let addBookButton = document.querySelector(".add-book-button");


function Book(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
}

let bookContainer = document.querySelector(".books");

let addBooksToContainer = (book) =>{
        let bookCard = document.createElement("div");
        let bookCardH2 = document.createElement("h2");
        let bookCardH3 = document.createElement("h3");
        let bookCardP = document.createElement("p");
    for(let i = 0; i<myLibrary.length; i++){
        
        

        bookCardH2.textContent = myLibrary[i].book.title;
        bookCardH3.textContent = myLibrary[i].book.author;
        bookCardP.textContent = myLibrary[i].book.pages;
        bookContainer.appendChild(bookCard)
        bookCard.appendChild(bookCardH2)
        bookCard.appendChild(bookCardH3)
        bookCard.appendChild(bookCardP)
        bookCard.id = `book${i}`
    }
}

let addBookToLibrary = (e) =>{
    let book = new Book(titleInput.value,authorInput.value,pagesInput.value);
    myLibrary = [...myLibrary,({book})]
    addBooksToContainer(book)
    console.log(myLibrary)
}

addBookButton.addEventListener("mouseup",addBookToLibrary)
