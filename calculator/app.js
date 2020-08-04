// global variables
let screenDialog = "";
let num1 = "";
let num2 = "";
let operation = "";
let isOperation = false;
let result = ""

//btns
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnDot = document.getElementById('btnDot');
const btnClear = document.getElementById('btnClear');
const btnEqual = document.getElementById('btnEqual');

const btnSum = document.getElementById('btnSum');
const btnRes = document.getElementById('btnRes');
const btnMult = document.getElementById('btnMult');
const btnDiv = document.getElementById('btnDiv');

const screen = document.getElementById('screen');


//clear
function clearAll(){
    screenDialog = "";
    num1 = "";
    num2 = "";
    operation = ""; 
    isOperation = false;
    screen.innerHTML = "";
    result = "";
}

// load number or simbol
function loadNumber(number){
    if (isOperation === false){
        num1 += number.toString();
    } else {
        num2 += number.toString();
    }
    printScreen(num1,operation,num2);
}



//isOperating?
function isOperating(simbol){
    isOperation = true;
    operation = simbol;
    printScreen(num1,operation,num2);
}

//operate
function operate(n1, op, n2){
    console.log(n1)
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    if (op === "+"){
        result = add(n1,n2);
    } else if(op === "-") {
        result = substract(n1,n2);
    } else if(op === "*") {
        result = multiply(n1,n2);
    } else if(op === "/") {
        result = divide(n1,n2);
    }
    console.log(n1);
    console.log(result);
    screen.innerHTML = result;
    num1 = result;
}

//calcular
function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if (b != 0){
        return a/b;
    } else {
        return "Can't divide by zero";
    }
}

//printScreen
function printScreen(n1, op, n2){
    if (n1 == null){
        n1 = ""
    }
    if (n2 == null){
        n2 = ""
    }
    if (op == null){
        op = ""
    }
    screen.innerHTML = `${n1} ${op} ${n2}`;
}

//events
btn0.addEventListener('click', () => {loadNumber(0);});
btn1.addEventListener('click', () => {loadNumber(1);});
btn2.addEventListener('click', () => {loadNumber(2);});
btn3.addEventListener('click', () => {loadNumber(3);});
btn4.addEventListener('click', () => {loadNumber(4);});
btn5.addEventListener('click', () => {loadNumber(5);});
btn6.addEventListener('click', () => {loadNumber(6);});
btn7.addEventListener('click', () => {loadNumber(7);});
btn8.addEventListener('click', () => {loadNumber(8);});
btn9.addEventListener('click', () => {loadNumber(9);});
btnDot.addEventListener('click', () => {loadNumber(".");});

btnSum.addEventListener('click', () => {isOperating("+");});
btnRes.addEventListener('click', () => {isOperating("-");});
btnMult.addEventListener('click', () => {isOperating("*");});
btnDiv.addEventListener('click', () => {isOperating("/");});

btnEqual.addEventListener('click', () => {operate(num1, operation, num2);});

btnClear.addEventListener('click', () => {clearAll();});