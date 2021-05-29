

function checkMonth(){
    let date = new Date();
    let month = document.getElementById('month').value;
   
    let year = date.getFullYear();
    let currentMonth = new Date(year, month, 0).getDate();

        document.getElementById('result').innerHTML = currentMonth;
    
}