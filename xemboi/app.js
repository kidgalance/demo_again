function checkDay() {
    alert("Bói toán chỉ là 1 hình thức bói tóan. Bói thì bói mà không bói thì bói");
    let maleBorn = document.getElementById('maleBorn').value;
    let femaleBorn = document.getElementById('femaleBorn').value;

    let dateMale = new Date(maleBorn);
    let dateFemalte = new Date(femaleBorn);

    maleBorn = dateMale.getFullYear();
    femaleBorn = dateFemalte.getFullYear();

    chiMale = maleBorn % 12;
    chiFemale = femaleBorn % 12;
 
    if(chiMale==0 && chiFemale==6 || chiMale==6 && chiFemale==0){
        txt = "Tuổi Dần và Thân khắc nhau";
    }else if(chiMale==9 && chiFemale==3 || chiMale==3 && chiFemale==9){
        txt = "Tuổi Tỵ và Hợi khắc nhau";
    }else if(chiMale==2 && chiFemale==8 || chiMale==8 && chiFemale==2){
        txt = "Tuổi Thìn và Tuất khắc nhau";
    }else if(chiMale==5 && chiFemale==11 || chiMale==11 && chiFemale==5){
        txt = "Tuổi Sửu và Mùi khắc nhau";
    }else if(chiMale==8 && chiFemale==5 || chiMale==5 && chiFemale==8){
        txt = "Thìn chỉ xung với Sửu chứ không khắc mạnh -> Cố vẫn đc nhé :))";
    }else if(chiMale==8 && chiFemale==11 || chiMale==11 && chiFemale==8){
        txt = "Thìn chỉ xung với Mùi chứ không khắc mạnh -> Cố vẫn đc nhé :))";
    }else if(chiMale==4 && chiFemale==10 || chiMale==10 && chiFemale==4){
        txt = "Tuổi Tý và Ngọ khắc nhau";
    }else if(chiMale==1 && chiFemale==7 || chiMale==7 && chiFemale==1){
        txt = "Tuổi Mẹo và Dậu khắc nhau";
    }else if(chiMale==4 && chiFemale==7 || chiMale==7 && chiFemale==4){
        txt = "Tý kết hợp với Mão chỉ xung nhẹ chứ không khắc chế -> Cố vẫn đc nhé :))";
    }else if(chiMale==4 && chiFemale==1 || chiMale==1 && chiFemale==4){
        txt = "Tý kết hợp với Dậu chỉ xung nhẹ chứ không khắc chế -> Cố vẫn đc nhé :))";
    }else if(chiMale==9 && chiFemale==11 || chiMale==11 && chiFemale==9){
        txt = "Kết hợp không hài hòa, rủi ro dễ xảy ra";
    }else if(chiMale==5 && chiFemale==10 || chiMale==10 && chiFemale==5){
        txt = "Mang đến nhiều điều không may";
    }else if(chiMale==6 && chiFemale==9 || chiMale==9 && chiFemale==6){
        txt = "Mối quan hệ không lâu dài";
    }else if(chiMale==3 && chiFemale==0 || chiMale==0 && chiFemale==3){
        txt = "Tính cách đối nghịch nhau";
    }else if(chiMale==7 && chiFemale==8 || chiMale==8 && chiFemale==7){
        txt = "Gặp nhau chỉ thêm muộn phiền";
    }else if(chiMale==10 && chiFemale==1 || chiMale==1 && chiFemale==10){
        txt = "Cản trở con đường làm ăn, công danh";
    }else{
        txt = "Xin chúc mừng, 2 bạn hợp nhau";
    }

    switch(chiMale){
        case 0: chiMale = "Thân";
         break;

         case 1: chiMale = "Dậu";
         break;

         case 2: chiMale= "Tuất";
         break;
    
         case 3: chiMale= "Hợi";
         break;
    
         case 4: chiMale= "Tý";
         break;
    
         case 5: chiMale = "Sửu";
         break;
    
         case 6: chiMale= "Dần";
         break;
    
         case 7: chiMale= "Mão";
         break;
    
         case 8: chiMale = "Thìn";
         break;
    
         case 9: chiMale= "Tỵ";
         break;

         case 10: chiMale = "Ngọ";
         break;

         case 11: chiMale = "Mùi";
         break;
    }
    switch(chiFemale){
        case 0: chiFemale = "Thân" && chiFemale ==0;
         break;

         case 1: chiFemale = "Dậu" && chiFemale ==1;
         break;

         case 2: chiFemale= "Tuất" && chiFemale ==2;
         break;
    
         case 3: chiFemale= "Hợi";
         break;
    
         case 4: chiFemale= "Tý";
         break;
    
         case 5: chiFemale = "Sửu";
         break;
    
         case 6: chiFemale= "Dần";
         break;
    
         case 7: chiFemale= "Mão";
         break;
    
         case 8: chiFemale = "Thìn";
         break;
    
         case 9: chiFemale= "Tỵ";
         break;

         case 10: chiFemale = "Ngọ";
         break;

         case 11: chiFemale = "Mùi";
         break;
    }

    document.getElementById('chiMale').innerHTML = "Nam sinh năm " + maleBorn + " tuổi " + chiMale;
    document.getElementById('chiFemale').innerHTML = "Nữ sinh năm " + femaleBorn +" tuổi " + chiFemale;
    document.getElementById('result').innerHTML = txt;
    document.getElementById('infomation').innerHTML = "Và dù có hợp nhau hay không thì hãy cứ chia tay đi bạn nhé :))";
    
}