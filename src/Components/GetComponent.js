import axios from "axios";

const refetchFunction = async () => {
  try {
    return await axios.get("http://localhost:5000");
  } catch (err) {
    console.log("Error in refetch function", err);
    throw err;
  }
};

export default refetchFunction;
