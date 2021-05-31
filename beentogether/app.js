
localStorage.setItem('pickDate', pickDate);
let nameBF = document.getElementById('nameBF').value;
let nameGF = document.getElementById('nameGF').value;

function getDate() {
    let pickDate = document.getElementById('pickDate').value;
    let date = new Date(pickDate);
    let timeBegin = date.getTime();
    let currentDate = Date.now();

    realLongDay = currentDate - timeBegin;

    let miliTimeOfDay = 24*60*60*1000;
     
    timeLove = Math.floor(realLongDay / miliTimeOfDay);
    console.log(timeLove);
    document.getElementById('result').innerHTML = "You have been together in " + timeLove + " days";
    if(timeBegin > currentDate ) {
    
        alert("First day must be smaller than day.");
    }
    

    }
function progress(){
    mod = timeLove % 1000;
    fNumber = timeLove - mod+1;
    sNumber = timeLove - mod+1000;
    document.getElementById('fNumber').innerHTML = +fNumber;
    document.getElementById('sNumber').innerHTML = +sNumber;
    document.getElementById('progress').value = mod;
}