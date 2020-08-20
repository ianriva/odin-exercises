// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


const addUpdate = document.getElementById('addUpdate');
const library = document.getElementById('library');
const name = document.getElementById('name');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

let bookDiv;
let nameDisp;
let authorDisp;
let pagesDisp;
let readDisp;
let modDisp;
let delDisp;

let myLibrary = [{
        name: "Final empire",
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

function addBook() {
    const newBook = new Book(name.value, author.value, pages.value);
    myLibrary.push(newBook);
    modal.style.display = "none";
    render();
}

function deleteBook(i) {
    myLibrary.splice(i,1);
    render();
}

function updateBook(i) {
    myLibrary[i].name = name.value;
    myLibrary[i].author = author.value;
    myLibrary[i].pages = pages.value;
    modal.style.display = "none";
    addUpdate.textContent = "Add to library";
    addUpdate.setAttribute("onclick", "addBook()");
    render();
}

function modBook(i) {
    modal.style.display = "block";
    name.value = myLibrary[i].name;
    author.value = myLibrary[i].author;
    pages.value = myLibrary[i].pages;
    addUpdate.textContent = "Update book";
    addUpdate.setAttribute("onclick", "updateBook("+i+")");
}
function readBook(i) {
    let divActual = document.getElementById(i);
    if (myLibrary[i].read === true) {
        myLibrary[i].read = false;
    } else {
        myLibrary[i].read = true;
    }
    render();
}

function render() {
    while (library.firstChild) {
        library.removeChild(library.lastChild);
    }
    //show library
    myLibrary.forEach((book, index) => {
        //create elements
        bookDiv = document.createElement("div");
        nameDisp = document.createElement("h1");
        authorDisp = document.createElement("p");
        pagesDisp = document.createElement("p");
        readDisp = document.createElement("button");
        modDisp = document.createElement("button");
        delDisp = document.createElement("button");
        //setting fn on atributtes
        readDisp.setAttribute("onclick", "readBook(" + index + ")");
        modDisp.setAttribute("onclick", "modBook(" + index + ")");
        delDisp.setAttribute("onclick", "deleteBook(" + index + ")");
        readDisp.setAttribute("id", index);
        // visual
        bookDiv.className += "bg-gray-800 p-4 m-4 rounded text-center w-56 hover:shadow-2xl";
        nameDisp.className += "text-2xl my-3 font-bold";
        authorDisp.className += "text-xl my-3";
        pagesDisp.className += "text-lg my-3";
        delDisp.className += "bg-orange-700 text-lg m-1 py-1 px-3 rounded";
        modDisp.className += "bg-indigo-700 text-lg m-1 py-1 px-3 rounded";
        // inner content
        nameDisp.innerHTML = book.name;
        authorDisp.innerHTML = book.author;
        pagesDisp.innerHTML = book.pages + " pages";
        readDisp.setAttribute("content", "Read");
        readDisp.textContent = "Read";
        delDisp.textContent = "Delete";
        modDisp.textContent = "Modify";
        if (book.read === false) {
            readDisp.setAttribute("class", "bg-red-700 text-lg m-1 py-1 px-3 rounded");
        } else {
            readDisp.setAttribute("class", "bg-teal-700 text-lg m-1 py-1 px-3 rounded");
        }
        
        // add content to div
        library.appendChild(bookDiv);
        bookDiv.appendChild(nameDisp);
        bookDiv.appendChild(authorDisp);
        bookDiv.appendChild(pagesDisp);
        bookDiv.appendChild(readDisp);
        bookDiv.appendChild(modDisp);
        bookDiv.appendChild(delDisp);
    });

}


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