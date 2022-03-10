let operator = " ";
let a = 0, b = 0;

function add(a, b) {
    return ((a + b));
};

function subtract(a, b) {
    return ((a - b));
};

function multiply(a, b) {
    return ((a * b));
};

function divide(a, b) {
    if(b == 0) {
        alert("Division by 0 is invalid");
    }
    else {
        return ((a / b).toFixed(5));
    }
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
    a = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = " ";
    operator = document.getElementById("add").textContent;
    document.getElementById("btnFloat").disabled = false;
}

function storeInputSub() {
    a = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = " ";
    operator = document.getElementById("subtract").textContent;
    document.getElementById("btnFloat").disabled = false;
}

function storeInputMul() {
    a = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = " ";
    operator = document.getElementById("multiply").textContent;
    document.getElementById("btnFloat").disabled = false;
}

function storeInputDiv() {
    a = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = " ";
    operator = document.getElementById("divide").textContent;
    document.getElementById("btnFloat").disabled = false;
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

function getNumFloat() {
    let str = document.getElementById("btnFloat").textContent;
    document.getElementById("display").value += str;
    document.getElementById("btnFloat").disabled = true;
}

function equalTo() {
    b = parseFloat(document.getElementById("display").value);
    operate(operator, a, b);
}

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}