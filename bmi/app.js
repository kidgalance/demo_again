function cal(){
    let tall = +document.getElementById('tall').value;
    let weight = +document.getElementById('weight').value;

    bmi = (weight / ( tall * tall))*100;
    document.getElementById('bmi').innerHTML = bmi ; 
    if(bmi < 18){
        document.getElementById('result').innerHTML = "Ban la nguoi gay";
    } else if(bmi <=18 && bmi < 25){
        document.getElementById('result').innerHTML = "Ban la nguoi bt";
    } else 
        document.getElementById('result').innerHTML = "Ban la nguoi beo";
}