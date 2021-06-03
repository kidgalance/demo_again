function checkFruit() {
    let fruit = document.getElementById('fruit').value;

    let oi = 20000
    let duahau = 20000;
    let tao = 30000;
    let xoai = 30000;
    let cam = 40000;
    let chomchom = 40000;
    let mangcut = 50000;
    switch(fruit){
        case 1: fruit = "Ổi";
        
        break;

        case 2: fruit = "Dưa Hấu";
       
        break;

        case 3: fruit = "Táo";
        
        break;

        case 4: fruit = "Xoài";
      
        break;

        case 5: fruit = "Cam";
       
        break;

        case 6: fruit = "Chôm Chôm";
       
        break;

        case 7: fruit = "Măng Cụt";
       
        break;
        
    }
            
    if(fruit == "Ổi"){
        txt = document.getElementById('result').innerHTML = "Giá của ổi là " + oi + " VNĐ/KG";
     } else if(fruit == "Dưa Hấu"){
        txt = document.getElementById('result').innerHTML = "Giá của Dưa Hấu là " + duahau + " VNĐ/KG";
     }
     else if(fruit == "Táo"){
        txt = document.getElementById('result').innerHTML = "Giá của Táo là " + tao + " VNĐ/KG";
     }
     else if(fruit == "Xoài"){
        txt =  document.getElementById('result').innerHTML = "Giá của Xoài là " + xoai + " VNĐ/KG";
      }
      else if(fruit == "Cam"){
        txt =  document.getElementById('result').innerHTML = "Giá của Cam là " + cam + " VNĐ/KG";
     }
     else if(fruit == "Chôm Chôm"){
        txt = document.getElementById('result').innerHTML = "Giá của Chôm Chôm là " + chomchom + " VNĐ/KG";
     }
     else if (fruit == "Măng Cụt"){
        txt = document.getElementById('result').innerHTML = "Giá của Măng Cụt là " + mangcut + " VNĐ/KG";
    }
    document.getElementById('result').innerHTML = txt;
}