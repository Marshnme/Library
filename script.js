let myLibrary = [];

let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let addBookButton = document.querySelector(".add-book-button");
let newBookButton = document.querySelector(".new-book");
let addBookForm = document.querySelector(".add-book-form");
let exitFormButton = document.querySelector(".x")

newBookButton.addEventListener("mouseup",displayForm);
exitFormButton.addEventListener("mouseup",displayForm);
function displayForm(){
    const styles = window.getComputedStyle(addBookForm)
    
    if(styles.display === "none"){
        addBookForm.classList.remove("hidden-book-form")
    }else{
        addBookForm.classList.add("hidden-book-form")
    }
}

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
        let removeButton = document.createElement("button")

        removeButton.addEventListener("mouseup",removeBook)

        
    for(let i = 0; i<myLibrary.length; i++){
        
        

        bookCardH2.textContent = myLibrary[i].book.title;
        bookCardH3.textContent = myLibrary[i].book.author;
        bookCardP.textContent = myLibrary[i].book.pages;
        removeButton.textContent = "Remove Book?";
        bookContainer.appendChild(bookCard)
        bookCard.appendChild(bookCardH2)
        bookCard.appendChild(bookCardH3)
        bookCard.appendChild(bookCardP)
        bookCard.appendChild(removeButton)
        bookCard.classList.add(`book`)
        bookCard.dataset.attribute = book.id

    }
    
}
let num = 0;
let addBookToLibrary = (e) =>{
    e.preventDefault()
    let book = new Book(titleInput.value,authorInput.value,pagesInput.value);
    myLibrary = [...myLibrary,({book})]
    book.id = num;
    addBooksToContainer(book)
    num++

    console.log(myLibrary)
}

let removeBook = (e) => {
    let currentBook = e.target.parentElement.dataset.attribute;

    for(let i = 0; i<myLibrary.length; i++){
        if(myLibrary[i].book.id == currentBook){
                    myLibrary.splice(i,1)
                    e.target.parentElement.remove()
        }else{
            console.log(myLibrary[i].book.id,currentBook)
            console.log("error")
        }
    }
}

addBookForm.addEventListener("submit",addBookToLibrary)
