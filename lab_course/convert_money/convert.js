function convertMoney(){
    //lay gia tri tu input dau vao
    let amount = document.getElementById('amount').value;
    let fromCurrent = document.getElementById('from_current').value;
    let toCurrent = document.getElementById('to_current').value;
    //Math.floor hàm làm tròn số
    result = Math.floor(amount * toCurrent / fromCurrent);
    //console.log(result);
    //thay doi noi dung phan tu HTML su dung innerHTML
    document.getElementById('result').innerHTML = "Result: " +result;

}