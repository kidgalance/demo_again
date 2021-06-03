function averPoint() {
    let math = +document.getElementById('math').value;
    let liter = +document.getElementById('liter').value;
    let eng = +document.getElementById('eng').value;
    let area = document.getElementById('area').value;
    
    let plus = "";

    switch(area){
        case "KV1": 
            plus = 0.75;
        break;
        case "KV2": 
            plus = 0.25;
        break;
        case "KV2-NT": 
            plus = 0.5;
        break;
        case "KV3": 
            plus = 0;
        break;
    }
    point = math + liter + eng + plus;
    document.getElementById('result').innerHTML = "Điểm thi đại học của bạn là: " + point;
}