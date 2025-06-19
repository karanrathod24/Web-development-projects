
const display = document.getElementById('display');

function clearDisplay(){
    display.value = ''
}

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR!!"; 
    }
}

function backSpace(){
    display.value = display.value.slice(0, -1);
}