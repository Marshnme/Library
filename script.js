let myLibrary = [];

let titleInput = document.querySelector("#book");
let addBookButton = document.querySelector(".add-book-button");


function Book(title){
    return this.title = title;
}

let bookContainer = document.querySelector(".books");

let addBookToContainer = () =>{
    let bookCard = document.createElement("div");
    for(let i =0; i<myLibrary.length; i++){
        bookCard.textContent = myLibrary[i];
        bookContainer.appendChild(bookCard)
    }
}

let addBookToLibrary = (e) =>{
    let newBook = Book(titleInput.value);
    myLibrary.push(newBook)
    addBookToContainer(newBook)
}

addBookButton.addEventListener("mouseup",addBookToLibrary)