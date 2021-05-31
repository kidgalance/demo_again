function loving(){
    let boyfriend_name = document.getElementById('boyfriend-name').value;
    let girlfriend_name = document.getElementById('girlfriend-name').value;
    let first_date = document.getElementById('date').value;
    let first_month = document.getElementById('month').value;
    let first_year = document.getElementById('year').value;
    a = first_year;
    b = first_month;
    c = first_date;
    let check_date =true;
    let current_day = new Date();
    current_date = current_day.getDate();
    current_month = current_day.getMonth()+1;
    current_year = current_day.getUTCFullYear();
    let first_day = new Date (first_year,first_month-1, first_date);
    if (first_day.getTime()>current_day.getTime()){
        alert('The first day cannot be later than '+current_date+'/'+current_month+'/'+current_year+'.');
        check_date = False;
    }
    else {
        if (b==4 || b==6 || b==9 || b==11){
            if (c>=31){
                check_date = false;
            }
        }
        else {
            if (b==2){
                if(c>=30){
                    check_date = false;
                }
                if (a%400==0){
                    if (c>=29){
                        check_date = false;
                    }
                }
                else {
                    if (a%4==0) {
                        if (c>=30){
                            check_date = false; 
                        }
                    }
                    else {
                        if (c>=29){
                            check_date = false;
                        }
                    }
                }
            }
        }
    }
    if (check_date==true){
            love_days = Math.floor((current_day.getTime()-first_day.getTime())/(24*60*60*1000));
            if (love_days % 1000 == 0) {
                document.getElementById('boy_image').src= 'https://i.pinimg.com/originals/15/c3/10/15c31079e8ba9054fbbbf35836fc3ac1.gif';
                document.getElementById('girl_image').src= 'https://i.pinimg.com/originals/a6/e2/e0/a6e2e00990ea7a77557be34ccbcf1d7d.gif';
                document.getElementById('result').innerHTML = 'Congratulation! You have been together in '+love_days+' days.'
            }
            else {
                document.getElementById('result').innerHTML = 'You are a couple in: '+love_days+' days.'
            }
    }
    else {
        alert('Wrong date. Please re-input the first date.')
    }
}
function progress(){
    mod = love_days %1000;
    first_number = love_days-mod+1;
    second_number = love_days-mod+1000;
    document.getElementById('first_number').innerHTML = +first_number;
    document.getElementById('tientrinh').value= mod;
    document.getElementById('second_number').innerHTML = +second_number;
}