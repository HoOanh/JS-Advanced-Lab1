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
  tasks = document.querySelector(".tasks");

listOrder.forEach((item) => {
  tasks.innerHTML += item;
});
