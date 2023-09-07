document.addEventListener("DOMContentLoaded", function () {
  const temp = document.getElementById("tempin");
  const result = document.getElementById("result");
  const radio = document.querySelectorAll('input[name="conversion"]');
  const btnReset = document.getElementById("btn-cancel");
  const btnConv = document.getElementById("btn-conv");
  const unitin = document.getElementById("tempinunit");
  const unitresult = document.getElementById("unit_result");
  const t1 = document.getElementById("t1");

  function convertTemperature() {
    const temperature = parseFloat(temp.value);

    if (isNaN(temperature)) {
      result.textContent = "โปรดป้อนค่าอุณหภูมิที่ถูกต้อง";
      unitin.textContent = "";
      unitresult.textContent = "";
      t1.textContent = "";
      return;
    }

    let convertedTemperature;
    if (radio[0].checked) {
      // เซลเซียส เป็น ฟาเรนไฮท์
      convertedTemperature = (temperature * 9) / 5 + 32;
      unitin.textContent = "เซลเซียส";
    } else {
      // ฟาเรนไฮท์ เป็น เซลเซียส
      convertedTemperature = ((temperature - 32) * 5) / 9;
      unitin.textContent = "ฟาเรนไฮท์";
    }

    result.textContent = convertedTemperature.toFixed(2);
  }

  function resetForm() {
    temp.value = "";
    result.textContent = "0.00";
    unitin.textContent = "เซลเซียส"
    t1.textContent = "มีค่าเป็น";
    unitresult.textContent = "ฟาเรนไฮท์"
    radio[0].checked = true;
  }

  function changeunit() {
    const temperature = parseFloat(temp.value);
    if (isNaN(temperature)) {
        result.textContent = "0.00";
        if(radio[0].checked) {
            // เซลเซียส เป็น ฟาเรนไฮท์
            t1.textContent = "มีค่าเป็น";
            unitin.textContent = "เซลเซียส";
            unitresult.textContent = "ฟาเรนไฮท์";
          } else {
            // ฟาเรนไฮท์ เป็น เซลเซียส
            t1.textContent = "มีค่าเป็น";
            unitin.textContent = "ฟาเรนไฮท์";
            unitresult.textContent = "เซลเซียส";
          }
      }
  }

  function changeTemp(){
    const temperature = parseFloat(temp.value);
    if (isNaN(temperature)) {
        return;
      }else{
        convertTemperature();
      }
  }

  radio.forEach((option) =>option.addEventListener("change", changeunit));
  radio.forEach((option) =>option.addEventListener("change", changeTemp));
  btnReset.addEventListener("click", resetForm);
  btnConv.addEventListener("click", convertTemperature);
});
