function _addition(){
    let firstNumber = +document.getElementById('firstNum').value;
    let secondNumber = +document.getElementById('secNum').value;
    result = firstNumber + secondNumber;
    document.getElementById('result').innerHTML = "Result : " +result;
    console.log(result);
}
function subtraction(){
    let firstNumber = +document.getElementById('firstNum').value;
    let secondNumber = +document.getElementById('secNum').value;
    result = firstNumber - secondNumber;
    document.getElementById('result').innerHTML = "Result : " +result;
    console.log(result);
}
function multiplication(){
    let firstNumber = +document.getElementById('firstNum').value;
    let secondNumber = +document.getElementById('secNum').value;
    result = firstNumber * secondNumber;
    document.getElementById('result').innerHTML = "Result : " +result;
    console.log(result);
}
function division(){
    let firstNumber = +document.getElementById('firstNum').value;
    let secondNumber = +document.getElementById('secNum').value;
    result = firstNumber / secondNumber;
    document.getElementById('result').innerHTML = "Result : " +result;
    console.log(result);
}
