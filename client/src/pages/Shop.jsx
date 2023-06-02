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
    <div className="flex flex-col md:flex-row flex-wrap">
      <div className='p-3 pb-5 border md:basis-[40%]'>
        <h2 className='text-center font-bold mb-3'>Shops:</h2>
        <div className='flex flex-col gap-2'>
          {shops.map((shop) => (
            <button key={shop._id} className="py-2 border rounded bg-slate-50 hover:bg-slate-100">{shop.title}</button>
          ))}
        </div>
      </div>
      <div className="p-3 border md:basis-[60%]">food</div>
    </div>
  );
};

export default Shop;
