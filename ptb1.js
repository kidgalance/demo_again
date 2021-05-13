let numA = +prompt("Nhap vao he so A: ");
let numB = +prompt("Nhap vao he so B: ");


if(numA==0){
    if(numB==0){
        alert("PT co vo so nghiem");
    }else{
        alert("PT vo nghiem");
    }
       
}else{
    x=-numB/numA;
    alert("x co nghiem la: " +x);
}