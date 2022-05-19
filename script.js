let myLibrary = []

let input = document.querySelector("#book")
let addBookButton = document.querySelector(".add-book-button")


function Book(name){
    this.name = name;
}

let bookContainer = document.querySelector(".books");

let addBookToLibrary = (e) =>{
    
    console.log(input.value)
}


addBookButton.addEventListener("mouseup",addBookToLibrary)