let howManySquares = 16;
for (let i=0;i<256;i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    document.getElementById('container').appendChild(square);
}

const square = document.querySelectorAll(".square");
console.log(square);
