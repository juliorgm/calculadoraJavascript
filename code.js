var lastNumber = undefined;
var lastOperation = undefined;
var displayPrimary = document.querySelector("#primary-display");
var displaySecondary = document.querySelector("#secondary-display");

function getNumber(number){
    lastNumber = number;

    updateDisplay(lastNumber);
}

function getOperation(operation){

    if (lastOperation == undefined) {
        lastOperation = operation;
        primaryToSecondaryDisplay();
    } else {
        calculate();
        lastOperation = undefined;
        lastNumber = undefined;
    }
}

function calculate(){
    var numberOne = displaySecondary.value;
    var numberTwo = displayPrimary.value;

    var result = doCalculate(numberOne,numberTwo);

    displaySecondary.value += lastOperation + numberTwo;

    displayPrimary.value = result;
}

function doCalculate(numberOne,numberTow){
    switch(lastOperation){
        case "+":
            return numberOne + numberTow;
        case "-":
            return numberOne - numberTow;
        case "/":
            return numberOne / numberTow;
        case "*":
            return numberOne * numberTow;
    }
}

function updateDisplay(lastNumber){
    displayPrimary.value += lastNumber;
}

function primaryToSecondaryDisplay(){
    displaySecondary.value = displayPrimary.value;
    displayPrimary.value = "";
}

function eraseLastNumber(){
    displayPrimary.value = "";
    lastNumber = undefined;
}

function eraseAll(){
    displayPrimary.value="";
    displaySecondary.value="";
    lastNumber = undefined;
    lastOperation = undefined;
}

function putDecimal(){
    var num = displayPrimary.value.match(/\./g);

    if (num==0) {
        displayPrimary.value+=".";
    } 
}