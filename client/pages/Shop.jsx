import { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [shops, setShops] = useState([]);

  const getAllShops = async () => {
    try {
      const res = await axios.get("http://localhost:5500/api/shops");
      setShops(res.data);
      console.log("render");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllShops();
  }, []);

  return (
    <>
      {shops.map((shop) => (
        <button key={shop._id}>{shop.title}</button>
      ))}
    </>
  );
};

export default Shop;
