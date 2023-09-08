let btnCal = document.getElementById("btn-cal");
let showResult = document.getElementById("result");
let btnCancel = document.getElementById("btn-cancel");
let distance = document.getElementById("km");
let time = document.getElementById("min");

btnCal.addEventListener("click", function () {
    var d = parseFloat(distance.value)
    var t = parseFloat(time.value)
    var result;
    if(isNaN(d)||isNaN(t)){
        return
    }else if(d<=1){
        result = 35 + (t*2)
    }else if(d<=10){
        result = ((d-1)*5.50) + (t*2) + 35
    }else if(d<=20){
        result = ((d-10)*6.50) + (t*2) + 84
    }else if(d<=40){
        result = ((d-20)*7.50) + (t*2) + 149
    }else if(d<=60){
        result = ((d-40)*8.00) + (t*2) + 299
    }else if(d<=80){
        result = ((d-60)*9.00) + (t*2) + 459
    }else if(d>80){
        result = ((d-80)*10.50) + (t*2) + 639
    }
    showResult.innerHTML = result.toFixed(2);
});

btnCancel.addEventListener("click", function () {
  distance.value = "";
  time.value = "";
  showResult.innerHTML = "0";
});
