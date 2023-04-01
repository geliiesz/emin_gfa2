var num1;
var num2;
var result;

function calcUin(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
}

function calcUadd(){
    calcUin();
    result = num1 + num2;
    document.getElementById("result").innerHTML = "The sum of " +num1+ " and " +num2+ " is " +result+ ".";
}

function calcUsubtract(){
    calcUin();
    result = num1 - num2;
    document.getElementById("result").innerHTML = "The difference of " +num1+ " and " +num2+ " is " +result+ ".";
}

function calcUmultiply(){
    calcUin();
    result = num1 * num2;
    document.getElementById("result").innerHTML = "The product of " +num1+ " and " +num2+ " is " +result+ ".";
}

function calcUdivide(){
    calcUin();
    result = num1 / num2;
    document.getElementById("result").innerHTML = "The quotient of " +num1+ " and " +num2+ " is " +result+ ".";
}

function calcUremainder(){
    calcUin();
    result = num1 % num2;
    document.getElementById("result").innerHTML = "The remainder of " +num1+ " and " +num2+ " is " +result+ ".";
}