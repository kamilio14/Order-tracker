import axios from "axios";

const deleteOrder = async (id, refetch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/${id}`);
    console.log("response", response);
    refetch();
    console.log("responose", response);
  } catch (err) {
    console.log("err", err);
  }
};

export default deleteOrder;
