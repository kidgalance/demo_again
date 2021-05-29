let good = document.getElementById('good');
let cheap = document.getElementById('cheap');
let fast = document.getElementById('fast');

function checkBox(){
    
    if(good.checked == true){
        //good check && cheap fast uncheck
        if(cheap.checked == true){
            fast.checked = false;

        } else if(fast.checked == true){
            cheap.checked = false;
        } //else (fast.checked == true)
            //cheap.checked = false;

    
    } else if(cheap.checked == true){
        if(fast.checked == true){
            good.checked = false;
        }
    }
}