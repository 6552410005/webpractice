let btnCal = document.getElementById("btn-cal");
let showResult = document.getElementById("result");
let btnCancel = document.getElementById("btn-cancel");

let Width = document.getElementById("Width");
let length = document.getElementById("length");

btnCal.addEventListener("click", function () {
  var result = parseFloat(Width.value) * parseFloat(length.value);
  showResult.innerHTML = result.toFixed(2);
});

btnCancel.addEventListener("click", function () {
  Width.value = "";
  length.value = "";
  showResult.innerHTML = "0.00";
});
