const ListFormat = [
  {
    id: 1,
    format: "YYYY-MM-DD",
  },
  {
    id: 2,
    format: "DD/MM/YYYY",
  },
  {
    id: 3,
    format: "DD.MM.YYYY",
  },
  {
    id: 4,
    format: "DD, MMM YYYY",
  },
  {
    id: 5,
    format: "DD, MMMM YYYY",
  },
];

let showDate = document.querySelector("#show-date");

const convertDataAndInsertTodo = (day, month, year) => {
  showDate.innerHTML = "<h2> Ngày này còn được viết là </h2>";

  ListFormat.forEach((e) => {
    let convertResult = moment(
      `${parseInt(day)}/${parseInt(month)}/${parseInt(year)}`,
      "DD/MM/YYYY"
    );
    let res = convertResult.format(e.format);
    let todoItem = `
        <div>
            <div class="serial" id='task-id'>${e.id}</div>
            <div class="dateFormat">${res}</div>
        </div>
    `;

    showDate.innerHTML += todoItem;
  });
};

const listDay = document.querySelectorAll("input[type=radio]"),
  btnReset = document.querySelector(".ui-reset");

listDay.forEach((item) => {
  item.addEventListener("click", () => {
    let day = item.getAttribute("id");
    let monthYear = document.querySelector(".-month-year").innerText;

    day = day.slice(day.lastIndexOf("-") + 1, day.length);
    month = monthYear.slice(
      monthYear.lastIndexOf("Tháng") + 7,
      monthYear.lastIndexOf(",")
    );
    year = monthYear.slice(-4, monthYear.length);

    convertDataAndInsertTodo(day, month, year);
  });
});

btnReset.addEventListener("click", () => {
  showDate.innerHTML = " ";
});
