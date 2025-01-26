import { useState, useEffect } from "react";
import axios from "axios";

export const useGetData = () => {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataFunc = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000");
      console.log("dataaAfer", data);
      setGetData(data);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFunc();
  }, []);

  return { getData, loading, refetch: getDataFunc };
};
