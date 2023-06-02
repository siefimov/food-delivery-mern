import { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [shops, setShops] = useState([]);
  const [food, setFood] = useState([]);

  const getAllShops = async () => {
    try {
      const res = await axios.get("http://localhost:5500/api/shops");
      setShops(res.data);
      console.log("render");
    } catch (error) {
      console.log(error);
    }
  };

  const getFoodByShop = async (shop) => {
    try {
      const foodByShop = await axios.get(`http://localhost:5500/api/food/${shop}`);
      setFood(foodByShop.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllShops();
  }, []);

  return (
    <div className='m-auto flex w-[90%] flex-col flex-wrap md:flex-row'>
      <div className='border p-3 pb-5 md:basis-[30%]'>
        <h2 className='my-5 text-center text-2xl font-bold'>Shops:</h2>
        <div className='flex flex-col gap-5'>
          {shops.map((shop) => (
            <button key={shop._id} onClick={() => getFoodByShop(shop.title)} className='rounded border bg-slate-50 py-2 text-xl hover:bg-slate-100'>
              {shop.title}
            </button>
          ))}
        </div>
      </div>
      <div className='border p-3 md:basis-[70%]'>
        <h2 className='my-5 text-center text-2xl font-bold'>food</h2>
        <div className='flex flex-col gap-8'>
          {food.map((food) => (
            <div key={food.id} className='border md:flex'>
              <div className='max-w-md'>
                <img src={food.imgUrl} alt='' />
              </div>
              <div className='my-5 flex justify-between'>
                <div className='flex flex-col'>
                  <h3 className='mb-5 text-2xl font-bold'>{food.title}</h3>
                  <p className='text-xl'>${food.price}</p>
                </div>
                <div className='flex flex-col'>
                  <p className='mb-5 text-xl text-sky-600'>{food.shop}</p>
                  <button className='rounded-3xl border bg-sky-200 px-5 py-3 text-xl text-sky-900 hover:bg-sky-300'>add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
