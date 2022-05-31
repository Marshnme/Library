let myLibrary = [];


let mainElement = document.querySelector("main")
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let readInput = document.querySelector("#read")
let addBookButton = document.querySelector(".add-book-button");
let newBookButton = document.querySelector(".new-book");
let addBookForm = document.querySelector(".add-book-form");
let exitFormButton = document.querySelector(".x")

newBookButton.addEventListener("mouseup",displayForm);
exitFormButton.addEventListener("mouseup",displayForm);
addBookForm.addEventListener("submit",displayForm);

function displayForm(){
    const styles = window.getComputedStyle(addBookForm)
    
    if(styles.display === "none"){
        addBookForm.classList.remove("hidden-book-form")
        mainElement.classList.add("blur-style")
        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
        readInput.checked = false;
    }else{
        addBookForm.classList.add("hidden-book-form")
        mainElement.classList.remove("blur-style")
    }
}

class Book {
    constructor(title,author,pages,read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    changeReadStatus(){
        for(let i = 0; i < myLibrary.length; i++){
        if(this.parentElement.dataset.attribute == myLibrary[i].book.id){
            if(myLibrary[i].book.read == true){
                myLibrary[i].book.read = false;
                this.textContent = "You have not read this book!";
            }else{
                myLibrary[i].book.read = true;
                this.textContent = "You have read this book!";
            }
        }else{
            console.log("nomatch")
        }
    }
    }
}

let bookContainer = document.querySelector(".books");

let addBooksToContainer = (book) =>{
    
        let bookCard = document.createElement("div");
        let bookCardH2 = document.createElement("h2");
        let bookCardH3 = document.createElement("h3");
        let bookCardP = document.createElement("p");
        let bookCardRead = document.createElement("p");
        let removeButton = document.createElement("button");

        removeButton.addEventListener("mouseup",removeBook)

        
        
    for(let i = 0; i<myLibrary.length; i++){
        bookCardH2.textContent = `Title: ${myLibrary[i].book.title}`;
        bookCardH3.textContent = `Author: ${myLibrary[i].book.author}`;
        bookCardRead.classList.add("read-toggle")
        if(book.read === true){
            bookCardRead.textContent = "You have read this book!"
        }else{
            bookCardRead.textContent = "You have not read this book!"
        }
        
        bookCardP.textContent = `Pages: ${myLibrary[i].book.pages}`;
        removeButton.textContent = "Remove Book?";
        bookContainer.appendChild(bookCard)
        bookCard.appendChild(bookCardH2)
        bookCard.appendChild(bookCardH3)
        bookCard.appendChild(bookCardP)
        bookCard.appendChild(bookCardRead)
        bookCard.appendChild(removeButton)
        bookCard.classList.add(`book`)
        bookCard.dataset.attribute = book.id

    }
    bookCardRead.addEventListener("mouseup", book.changeReadStatus)
    
    
}
let num = 0;
let addBookToLibrary = (e) =>{
    e.preventDefault()
    let book = new Book(titleInput.value,authorInput.value,pagesInput.value,readInput.checked);
    myLibrary = [...myLibrary,({book})]
    book.id = num;
    addBooksToContainer(book)
    num++
}

let removeBook = (e) => {
    let currentBook = e.target.parentElement.dataset.attribute;

    for(let i = 0; i<myLibrary.length; i++){
        if(myLibrary[i].book.id == currentBook){
                    myLibrary.splice(i,1)
                    e.target.parentElement.remove()
        }else{
            console.log("error")
        }
    }
}

addBookForm.addEventListener("submit",addBookToLibrary)
