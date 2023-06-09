import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/cartSlice";
import Button from "../components/Button";

const Shop = () => {
  const [shops, setShops] = useState([]);
  const [food, setFood] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  const dispatch = useDispatch();

  const getAllShops = async () => {
    try {
      const res = await axios.get("https://fooddeliveryapp01.herokuapp.com/api/shops");
      console.log(res.data);
      setShops(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFoodByShop = async (shop) => {
    try {
      const foodByShop = await axios.get(`https://fooddeliveryapp01.herokuapp.com/api/food/${shop}`);
      setFood(foodByShop.data);
      localStorage.setItem("food", JSON.stringify([...foodByShop.data]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsClicked = (food) => {
    const foodWithQuantity = { ...food, quantity: 1 };
    dispatch(addToCart(foodWithQuantity));
  };

  const handleShopButtonClick = (shop) => {
    if (activeButton === shop) {
      setActiveButton(null);
      setFood([]);
      localStorage.setItem("food", JSON.stringify([]));
    } else {
      setActiveButton(shop);
      getFoodByShop(shop);
    }
  };

  useEffect(() => {
    getAllShops();
    setFood(JSON.parse(localStorage.getItem("food")) || []);
  }, []);

  return (
    <div className='m-auto mt-24 flex w-[90%] max-w-[320px] flex-col flex-wrap pb-12 sm:max-w-none md:flex-row'>
      <div className='border p-2 pb-5 md:basis-[30%]'>
        <h2 className='my-5 text-center text-2xl font-bold'>Shops:</h2>
        <div className='flex flex-col gap-5'>
          {shops.map((shop) => (
            <Button key={shop._id} shop={shop} title={shop.title} activeButton={activeButton} handleShopButtonClick={handleShopButtonClick} />
          ))}
        </div>
      </div>
      <div className='border p-2 md:basis-[70%]'>
        <h2 className='my-5 text-center text-2xl font-bold'>
          Food from <span className='text-sky-600'>{activeButton ? activeButton : "..."}</span>
        </h2>
        <div className='flex h-[100vh] flex-col gap-8 overflow-y-auto'>
          {food.map((item) => (
            <div key={item.imgUrl} className='rounded-xl border bg-slate-100 p-5 md:flex'>
              <div className='max-w-md'>
                <img src={item.imgUrl} alt='' />
              </div>
              <div className='my-5 flex items-center justify-between p-5'>
                <div className='flex flex-col'>
                  <h3 className='mb-5 text-2xl font-bold'>{item.title}</h3>
                  <p className='text-xl'>${item.price}</p>
                </div>
                <div className='flex h-full flex-col items-center justify-center '>
                  <p className='mb-5 text-xl text-sky-600'>{item.shop}</p>
                  <button onClick={() => handleIsClicked(item)} className={`min-w-[140px] rounded-3xl border bg-sky-200 px-5 py-3 text-xl text-sky-900 hover:bg-sky-300`}>
                    add to cart
                  </button>
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
