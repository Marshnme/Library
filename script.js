let myLibrary = [];

let titleInput = document.querySelector("#book");
let addBookButton = document.querySelector(".add-book-button");


function Book(title){
    return this.title = title;
}

let bookContainer = document.querySelector(".books");

let addBookToLibrary = (e) =>{
    let newBook = Book(titleInput.value);
    myLibrary.push(newBook)
    console.log(myLibrary)
}


addBookButton.addEventListener("mouseup",addBookToLibrary)