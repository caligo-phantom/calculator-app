let operator = " ";
let a = 0, b = 0;

function add(a, b) {
    return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};

function operate(operator, a, b) {
    if(operator == '+') {
        document.getElementById("display").value = add(a, b);
    }
    else if(operator == '-') {
        document.getElementById("display").value = subtract(a, b);
    }
    else if(operator == '*') {
        document.getElementById("display").value = multiply(a, b);
    }
    else if(operator == '/') {
        document.getElementById("display").value = divide(a, b);
    }
}

function storeInputAdd() {
    a = parseInt(document.getElementById("display").value);
    document.getElementById("display").value = " ";
    operator = document.getElementById("add").textContent;
}

function storeInputSub() {
    a = parseInt(document.getElementById("display").value);
    document.getElementById("display").value = " ";
    operator = document.getElementById("subtract").textContent;
}

function storeInputMul() {
    a = parseInt(document.getElementById("display").value);
    document.getElementById("display").value = " ";
    operator = document.getElementById("multiply").textContent;
}

function storeInputDiv() {
    a = parseInt(document.getElementById("display").value);
    document.getElementById("display").value = " ";
    operator = document.getElementById("divide").textContent;
}

function getNum1() {
    let str = document.getElementById("btn1").textContent;
    document.getElementById("display").value += str;
}

function getNum2() {
    let str = document.getElementById("btn2").textContent;
    document.getElementById("display").value += str;
}

function getNum3() {
    let str = document.getElementById("btn3").textContent;
    document.getElementById("display").value += str;
}

function getNum4() {
    let str = document.getElementById("btn4").textContent;
    document.getElementById("display").value += str;
}

function getNum5() {
    let str = document.getElementById("btn5").textContent;
    document.getElementById("display").value += str;
}

function getNum6() {
    let str = document.getElementById("btn6").textContent;
    document.getElementById("display").value += str;
}

function getNum7() {
    let str = document.getElementById("btn7").textContent;
    document.getElementById("display").value += str;
}

function getNum8() {
    let str = document.getElementById("btn8").textContent;
    document.getElementById("display").value += str;
}

function getNum9() {
    let str = document.getElementById("btn9").textContent;
    document.getElementById("display").value += str;
}

function getNum0() {
    let str = document.getElementById("btn0").textContent;
    document.getElementById("display").value += str;
}

function equalTo() {
    b = parseInt(document.getElementById("display").value);
    operate(operator, a, b);
}