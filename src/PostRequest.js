import React, { useState, useEffect } from "react";
import axios from "axios";
import refetchFunction from "./Components/GetComponent";
import { Order } from "./Components/Order";
import { useGetData } from "./hooks/useGetData";

export const PostRequest = () => {
  const [newOrder, setOrderName] = useState({ name: "" });
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { getData, refetch } = useGetData();

  console.log("getData", getData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/", newOrder);
      setPostData(newOrder.name);
      refetch();
    } catch (err) {
      console.error("Error submitting data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    setOrderName((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="whole-page min-h-screen flex justify-center pt-40 bg-slate-200">
      <div className="form/orders min-h-[50%] w-1/2 flex flex-col ">
        <div className="top h-48 bg-white flex flex-col items-center pt-10 rounded-md shadow-md">
          <h1 className="text-3xl font-mono bg-white pb-5">Orders Tab</h1>
          <form
            onSubmit={handleSubmit}
            className="inpu/btn flex items-center justify-center"
          >
            <input
              name="name"
              id="1"
              value={newOrder.name}
              onChange={handleOnChange}
              className="bg-slate-200 mr-2 py-1 pl-[14px] rounded-sm"
              placeholder="orderName"
            />
            <button className="px-6 py-1 bg-violet-700 text-white font-mono rounded-md">
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>{" "}
        <div className="mt-28 w-full ">
          {getData.map((item) => (
            <Order
              key={item.id}
              item={item.name}
              id={item.id}
              refetch={refetch}
              isCompleted={item.isCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
