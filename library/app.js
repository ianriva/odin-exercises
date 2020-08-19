const library = document.getElementById('library');

let myLibrary = [{
        name: "final empire",
        author: "Brandon Sanderson",
        pages: 589,
        read: false,
    },
    {
        name: "The hobbit",
        author: "JRR Tolkien",
        pages: 365,
        read: false,
    },
    {
        name: "The house of the spirits",
        author: "Isabel Allende",
        pages: 677,
        read: true,
    },
    {
        name: "Game of thrones",
        author: "G.R.R. Martin",
        pages: 988,
        read: true,
    },
];


function Book(name, author, pages, read = false) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary() {
    // do stuff here
}

function render() {
    //show library
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.setAttribute("id", index);
        bookDiv.innerHTML += book.name;
        console.log("book id: " + index);
        library.appendChild(bookDiv);
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

render();