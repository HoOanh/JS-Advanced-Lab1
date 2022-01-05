const tasks = document.querySelector(".tasks"),
  inputDate = document.querySelector("#date"),
  inputMonth = document.querySelector("#month"),
  inputYear = document.querySelector("#year"),
  btnSubmit = document.querySelector("#submit");

btnSubmit.addEventListener("click", () => {
  const weekday = [
    "Chủ Nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];
  if (inputDate.value && inputMonth.value && inputYear.value) {
    let date = new Date(
      `${inputYear.value}-${inputMonth.value}-${inputDate.value}`
    );

    tasks.innerHTML += `<h1>Hihi đúng rồi!! Ngày ${inputDate.value}/${
      inputMonth.value
    }/${inputYear.value} là: ${weekday[date.getDay()]} </h1>`;
  }
});

const inputs = document.querySelectorAll(".form-control input"),
  labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`
    )
    .join("");
});
