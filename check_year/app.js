function checkYear(){
    let currentYear = document.getElementById('currentYear').value;
    if(currentYear % 400 == 0  || currentYear % 4 == 0 && currentYear %100!== 0){
       
    }
    else document.getElementById('currentYear').value = "Nam " + currentYear + "khong phai la nam nhuan";
    
}