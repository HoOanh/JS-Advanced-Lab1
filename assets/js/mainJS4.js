const orders = [
  {
    id: 1,
    name: "Hồ Oanh",
    product: "Oatmeal && Strawberry; morning tea",
    status: 1,
  },
  {
    id: 2,
    name: "Duy The Nights",
    product: "Cookie && banana; milk",
    status: 0,
  },
  {
    id: 3,
    name: "Cao Quang Sang",
    product: "Cheese sandwich && orange; coca",
    status: 0,
  },
  {
    id: 4,
    name: "Đào Hoàng Linh",
    product: "Fried chicken && pear; cafe",
    status: 1,
  },
];

function renderOrder() {
  const getOrders = (order) => {
    let status = order.status == 1 ? "checked" : " ";
    return `
    <input id="label-${order.id}" type="checkbox" ${status} />
    <label for="label-${order.id}">
      <h2>
        ${order.name}
        <span>${order.product}</span>
      </h2>
    `;
  };

  let listOrder = orders.map(getOrders),
    tasks = document.querySelector(".list-order");

  tasks.innerHTML = "";

  listOrder.forEach((item) => {
    tasks.innerHTML += item;
  });
}

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

renderOrder();

function capitalize(word) {
  return word
    .split("")
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase()
    )
    .join("");
}

let btnAdd = document.querySelector("#add");

btnAdd.addEventListener("click", () => {
  let lastId = orders[orders.length - 1].id,
    name = document.querySelector("#name"),
    order = document.querySelector("#order");
  if (name.value != "" && order.value != "") {
    orders.push({
      id: lastId + 1,
      name: capitalize(name.value),
      product: order.value,
      status: 0,
    });
    renderOrder();
    name.value = "";
    order.value = "";
  }
});
