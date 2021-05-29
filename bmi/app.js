function cal(){
    let tall = +document.getElementById('tall').value;
    let weight = +document.getElementById('weight').value;

    bmi = (weight / ( tall * tall));
    document.getElementById('bmi').innerHTML = "Chi so bmi cua ban la:" + bmi ; 
    if(bmi < 18){
        document.getElementById('result').innerHTML = "Ban la nguoi gay";
    } else if(18<= bmi <=25){
        document.getElementById('result').innerHTML = "Ban la nguoi bt";
    } else 
        document.getElementById('result').innerHTML = "Ban la nguoi beo";
}