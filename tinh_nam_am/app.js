let namDuong = +prompt("Nhap vao nam duong lich: ");
tinhCan = namDuong % 10;
tinhChi = namDuong % 12;
switch(tinhCan){
    case 0: tinhCan = "Canh";
     break;

     case 1: tinhCan = "Tân";
     break;

     case 2: tinhCan = "Nhâm";
     break;

     case 3: tinhCan = "Quý";
     break;

     case 4: tinhCan = "Giáp";
     break;

     case 5: tinhCan = "Ất";
     break;

     case 6: tinhCan = "Bính";
     break;

     case 7: tinhCan = "Đinh";
     break;

     case 8: tinhCan = "Mậu";
     break;

     case 9: tinhCan = "Kỷ";
     break;
}
switch(tinhChi){
    case 0: tinhChi = "Thân";
     break;

     case 1: tinhChi = "Dậu";
     break;

     case 2: tinhChi = "Tuất";
     break;

     case 3: tinhChi = "Hợi";
     break;

     case 4: tinhChi = "Tý";
     break;

     case 5: tinhChi = "Sửu";
     break;

     case 6: tinhChi = "Dần";
     break;

     case 7: tinhChi = "Mẹo";
     break;

     case 8: tinhChi = "Thìn";
     break;

     case 9: tinhChi = "Tỵ";
     break;
     case 10: tinhChi = "Ngọ";
     break;

     case 11: tinhChi = "Mùi";
     break;
}
namAmLich = tinhCan + " " + tinhChi;
alert('Năm âm lịch là: ' + namAmLich);