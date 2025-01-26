import { Link } from "react-router-dom";
import deleteOrder from "./Delete-Order";

export const Order = ({ item, id, refetch, isCompleted }) => {
  return (
    <div
      className={`w-4/4 flex  h-20 ${
        isCompleted ? "bg-green-500" : "bg-white"
      }   px-12 justify-between items-center mb-5 font-mono text-xl shadow-md `}
    >
      <h1 className="">{item}</h1>
      <h1>{id}</h1>
      <button onClick={() => deleteOrder(id, refetch)}>
        <i class="fa-solid fa-trash pr-5"></i>
      </button>
      <Link to={`/${id}`}>
        <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
      </Link>
    </div>
  );
};
