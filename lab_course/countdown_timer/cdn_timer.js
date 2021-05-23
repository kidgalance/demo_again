var lunarNewYear = new Date(2022,1,12,0,0,0).getTime();

function newYear(){
    //Lay thoi gian ngay hien tai (milisecond)
    let presentDay = new Date().getTime();

    timeToGo = lunarNewYear - presentDay;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    //Tim tgian con lai theo ngay, gio, phut, giay con lai qua cach chia lay du(%) va lam tron so

    let Day = Math.floor(timeToGo / (day));
    let Hour = Math.floor((timeToGo % (day)) / (hour));
    let Minute = Math.floor((timeToGo % (hour)) / (minute));
    let Second = Math.floor((timeToGo % (minute)) / (second));;
    //Truyen DL vao id
    console.log(Day,Hour,Minute,Second);
    document.getElementById("day").innerHTML = Day;
    document.getElementById("hour").innerHTML = Hour;
    document.getElementById("minute").innerHTML = Minute;
    document.getElementById("second").innerHTML = Second;
}   
setInterval(function(){
    newYear()
},1000)
