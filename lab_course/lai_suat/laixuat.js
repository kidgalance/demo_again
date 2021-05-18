let tienVay = +prompt("Nhap vao so tien vay: ");
let laiSuat = +prompt("Nhap vao lai suat ngan hang: ");
let namVay = +prompt("Nhap vao so nam vay: ");

tienLai = tienVay * (laiSuat/100);
gocLai = tienVay + (namVay*tienLai);
document.write("So tien lai la: "+tienLai);

document.write("So tien sau "+namVay+"ca goc lan lai la: "+gocLai+"trieu VND");