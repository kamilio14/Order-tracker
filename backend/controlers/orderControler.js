let allOrders = [];

let myId = 3;

const getOrders = (req, res) => {
  res.status(200).send(allOrders);
};

const postOrders = (req, res) => {
  const { name } = req.body;
  allOrders.push({ name: name, id: myId++, isCompleted: false });
  res.status(200).send("Post request successful");
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const newOrders = allOrders.filter((item) => item.id !== Number(id));
  allOrders = newOrders;
  res.status(200).send(newOrders);
};

const getOrderById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const selectedOrder = allOrders.find((item) => item.id === Number(id));
  res.status(200).send(selectedOrder);
};

const putOrders = (req, res) => {
  const { name, id, isCompleted } = req.body;
  const newOrders = allOrders.map((order) =>
    order.id === Number(id)
      ? { ...order, name: name, isCompleted: isCompleted }
      : order
  );

  allOrders = newOrders;
  res.status(200).send(newOrders);
};

module.exports = {
  getOrders,
  postOrders,
  deleteOrder,
  getOrderById,
  putOrders,
};
