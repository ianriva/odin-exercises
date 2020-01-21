const container = document.querySelector('.container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the text content';

container.appendChild(content);

const p = document.createElement('p');
p.textContent = "hey I'm red";
p.style.color = 'red';
content.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm blue";
h3.style.color = 'blue';
content.appendChild(h3);

const section2 = document.createElement("div");
section2.style.backgroundColor = "pink";
section2.style.border = '1px solid black';
container.appendChild(section2);

const title = document.createElement('h1');
title.textContent = "I'm in a div";
title.style.color = "black";
section2.appendChild(title);

const p2 = document.createElement("p");
p2.textContent = "Me too";
p2.style.color = "black";
section2.appendChild(p2);

//buttons
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => { alert('HOLA PRIMO');}

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("This is the best method for event managment");
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function(e){
    e.target.style.backgroundColor = "red";
});