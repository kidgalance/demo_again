let radius = +prompt("nhap vao ban kinh hinh tron: ");
const pi = 3.14;

perimeter = 2 * radius * pi;

acreage = (radius*radius) * pi;

document.write("Chu vi hinh tron voi ban kinh " +radius + " la: "+perimeter + "<br>");
document.write("Dien tich hinh tron voi ban kinh " +radius+ " la: "+acreage);