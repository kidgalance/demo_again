function setOutput(number){
    document.getElementById('output').value += number;
}
function calculator(){
    let input = document.getElementById('output').value;

    // hàm eval tính toán biểu thức dạng string
    result = eval(input);
    

    document.getElementById('output').value = result;
}
function rsBtn(){
    document.getElementById('output').value = "";
}
function deleteStr(){
    let str = document.getElementById('output').value;
    //substring(indextStart, indextEnd)
    str = str.substring(0, str.length-1); 
    document.getElementById('output').value = str;
}

//tinh giai thua
function factN(){
    //get from output or from result
    let n = (document.getElementById('output').value) || (document.getElementById('resut').value); 
    let fact = 1;
    for(let i = 1; i<=n;i++){
        fact *= i; //  <=> fact = fact * i;
    }
    document.getElementById('output').value = fact;
    fact.toLocaleString();
 
}

//tinh mu
function powValue(){
    let input = document.getElementById('output').value || document.getElementById('resut').value;
   // let setOutput = new setOutput();
    //output = document.getElementById('')
    //let powNum = document.getElementById('output').value || document.getElementById('result').value;
    //result = Math.pow(input,powNum);\
    result = (input**)
    document.getElementById();
}
