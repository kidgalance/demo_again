//tính tống tiền điện theo mức sử dụng


//document.getElementById('price').value = price;

// function checkPrice(){
//     const price = {
//         level1: 1.680,
//         level2: 1.734,
//         level3: 2.014,
//         level4: 2.536,
//         level5: 2.834,
//         level6: 2.937
//         }
//     if(total<=50){
//         money = total*price.level1;
//     }

// }

function add(){
    let elec = +document.getElementById('elec').value;
    //let price = +document.getElementById('price').value;
    let level = [1.680,1.734,2.014,2.536,2.834,2.937];
    if(elec <=50){
        document.getElementById('price').innerHTML = "Giá điện bậc 1 "+price;
        price = elec*level.level1;
        //document.getElementById('price').innerHTML = price;
    }

    result = elec * price;
    document.getElementById('result').innerHTML = result.toLocaleString()+" VNĐ";
    //tính tiền điện sau thuế
    tax = result * 10 /100;
    document.getElementById('tax').innerHTML = tax.toLocaleString()+" VNĐ";
    total = result + tax;
    document.getElementById('total').innerHTML = total.toLocaleString()+" VNĐ";
   
}
