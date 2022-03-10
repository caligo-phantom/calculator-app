let a = 0, res = 0;

function storeInputAdd() {
    let str = document.getElementById("add").textContent;
    document.getElementById("display").value += str;
    document.getElementById("btnFloat").disabled = false;
}

function storeInputSub() {
    let str = document.getElementById("subtract").textContent;
    document.getElementById("display").value += str;
    document.getElementById("btnFloat").disabled = false;
}

function storeInputMul() {
    let str = document.getElementById("multiply").textContent;
    document.getElementById("display").value += str;
    document.getElementById("btnFloat").disabled = false;
}

function storeInputDiv() {
    let str = document.getElementById("divide").textContent;
    document.getElementById("display").value += str;
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
    res = eval(document.getElementById("display").value);
    document.getElementById("display").value = res.toFixed(5);
}

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}