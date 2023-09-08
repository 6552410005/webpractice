let btnCal = document.getElementById("btn-cal");
let showResult = document.getElementById("result");
let btnCancel = document.getElementById("btn-cancel");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");

let Width = document.getElementById("Width");
let length = document.getElementById("length");

btnCal.addEventListener("click", function () {
  const w = parseFloat(Width.value)
  const l = parseFloat(length.value)
  if(isNaN(w)){
    t1.innerHTML = ""
    t2.innerHTML = ""
    showResult.innerHTML = "โปรดป้อนตัวเลข";
    return
  }else if(isNaN(l)){
    t1.innerHTML = ""
    t2.innerHTML = ""
    showResult.innerHTML = "โปรดป้อนตัวเลข";
    return
  }else{
    var result = w * l;
  showResult.innerHTML = result.toFixed(2);
  t1.innerHTML = "พื้นที่สี่เหลี่ยมเป็น"
  t2.innerHTML = "ตารางเมตร"
  }
});

btnCancel.addEventListener("click", function () {
  Width.value = "";
  length.value = "";
  showResult.innerHTML = "0.00";
  t1.innerHTML = "พื้นที่สี่เหลี่ยมเป็น"
  t2.innerHTML = "ตารางเมตร"
});
