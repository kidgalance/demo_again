
function convert(){
    
    let money = +document.getElementById('money').value;
    let time_range = +document.getElementById('time_range').value;
    let rate = +document.getElementById('rate').value;
    
    interest = money * (rate/100/12);

    result = money + (time_range*interest);
    

    document.getElementById('result').innerHTML = result;
    document.getElementById('money_rate').innerHTML = interest * time_range;

}