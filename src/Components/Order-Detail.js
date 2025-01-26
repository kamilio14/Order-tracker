import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";

const OrderDetail = () => {
  const [loading, setLoading] = useState(true);
  const [currentOrderInfo, setCurrentOrderInfo] = useState([]);
  const [edittedName, setEdittedName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const { id } = useParams();
  const { refetch } = useGetData();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentOrderInfo([]);
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/${id}`);
        setCurrentOrderInfo(data);
        setEdittedName(data.name);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000", {
        isCompleted: isChecked,
        name: edittedName,
        id: id,
      });
      refetch();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEdittedName(e.target.value);
  };

  const onCheckBoxChange = async (e) => {
    const newCeckedState = e.target.checked;
    setIsChecked(newCeckedState);

    e.preventDefault();

    await axios.put("http://localhost:5000/", {
      isCompleted: newCeckedState,
      id: id,
      name: edittedName,
    });

    refetch();
  };

  const handleBack = () => {};

  return (
    <>
      {loading ? (
        <h1>Loading . . ... .. .... . .... ..... . . . . .. ..... .. . .</h1>
      ) : (
        <div className="edit-page h-screen w-full bg-slate-600 flex justify-center items-center">
          <div className="edit-window w-1/2 h-1/2 bg-slate-50 flex flex-col p-10 ">
            <div class="flex flex-col h-full">
              <h1 className="mx-auto p-3 text-3xl">Edit Order </h1>
              <div className="flex justify-between">
                <h2 className="text-xl">Order ID</h2>
                <h3 className="text-xl">{currentOrderInfo.id}</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-xl">Name</h2>

                  <input
                    name="edit-input"
                    id="id-1"
                    onChange={handleChange}
                    value={edittedName}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-between">
                  <h2 className="text-xl">Completed</h2>
                  <input
                    type="checkbox"
                    name="my-check-box"
                    checked={isChecked}
                    onChange={onCheckBoxChange}
                  />
                </div>
                <div className="flex justify-evenly items-center flex-grow-1 py-10">
                  <Link to="/">
                    <button
                      className=" bg-slate-500 text-white font-bold py-2 px-4 rounded hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-blue-300 "
                      onClick={handleBack}
                    >
                      Go Back
                    </button>
                  </Link>
                  <button
                    className="bg-slate-500 text-white font-bold py-2 px-4 rounded hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-300 "
                    onClick={handleSubmit}
                  >
                    Edit Current Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetail;
