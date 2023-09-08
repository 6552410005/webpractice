document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("firstname");
  const Lastname = document.getElementById("lastname");
  const Interest = document.getElementById("interest");
  const CarPrice = document.getElementById("car_price");
  const CarBrand = document.getElementsByName("Car brand");
  const year = document.getElementById("years");
  const inst = document.getElementById("installment_amount");
  //output
  const ShowName = document.getElementById("showname");
  const CarChoose = document.getElementById("car_choose");
  const ShowInst = document.getElementById("showinstallments");
  const finance = document.getElementById("showfinance");
  const InstPerMont = document.getElementById("InstallmentPerMonth");
  const btnSub = document.getElementById("btn-submit");
  const btnCancel = document.getElementById("btn-cancel");

  function submit() {
    const Carprice = parseFloat(CarPrice.value);
    const IpM = parseFloat(inst.value);
    const InteRest = parseFloat(Interest.value);
    const y = parseFloat(year.value);
    ShowName.textContent = name.value;
    for (let i = 0; i < CarBrand.length; i++) {
      if (CarBrand[i].checked) {
        CarChoose.textContent = CarBrand[i].value;
      }
    }
    if (isNaN(Carprice)) {
      return;
    } else if (isNaN(IpM)) {
      return;
    } else if (isNaN(InteRest)) {
      return;
    } else {
      ShowInst.textContent = (Carprice * (IpM / 100)).toFixed(2); //เงินที่ใช้ดาวน์
      showfinance.textContent = (Carprice - Carprice * (IpM / 100)).toFixed(2); //ยอดไฟแนนซ์
      InstPerMont.textContent = (
        ((Carprice - Carprice * (IpM / 100)) * (InteRest / 100) * y +
          (Carprice - Carprice * (IpM / 100))) /
        (y * 12)
      ).toFixed(2); //ค่างวดต่อเดือน
    }
  }
  function reset() {
    name.value = "";
    Lastname.value = "";
    CarBrand[0].checked = true;
    CarPrice.value = "";
    installment_amount.value = "";
    Interest.value = "";
    year[0].selected = true;
    ShowName.textContent = "XXXXX";
    ShowInst.textContent = "XXXXX";
    showfinance.textContent = "XXXXX";
    InstPerMont.textContent = "XXXXX";
    CarChoose.textContent = "XXXXX";
  }

  btnSub.addEventListener("click", submit);
  btnCancel.addEventListener("click", reset);
});
