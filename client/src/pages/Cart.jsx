import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import Map from "../components/Map";
import UserForm from "../components/UserForm";

import { clearCart, getCart, updateCartItem, removeFromCart } from "../store/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();

  const foodInCart = useSelector((state) => state.cart.cart);
  const [user, setUser] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
  });

  const totalSum = foodInCart.length > 0 ? foodInCart.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0) : 0;

  const updateQuantity = (foodId, newQuantity) => {
    dispatch(updateCartItem({ foodId, newQuantity }));
  };

  const handleUserData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleSubmit = async (user, foodInCart, totalSum) => {
    const newOrder = await axios.post("https://fooddeliveryapp01.herokuapp.com/api/order", {
      user: user,
      products: foodInCart,
      totalSum: totalSum,
    });
    console.log(newOrder);
    dispatch(clearCart());
    setUser({ name: "", email: "", tel: "", address: "" });
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className='m-auto my-8 flex w-[90%] flex-col gap-8 md:flex-row'>
      <div className='flex flex-col gap-5 md:basis-[40%]'>
        <Map />
        <UserForm name={user.name} email={user.email} tel={user.tel} address={user.address} onChange={handleUserData} />
      </div>
      <div className='flex w-full flex-col'>
        <div>
          {foodInCart.map((food) => (
            <div key={food._id} className='mb-5 flex flex-col gap-5 items-center justify-around rounded-xl border bg-slate-50 p-5 md:flex-row'>
              <div className='max-w-md'>
                <img src={food.imgUrl} alt={food.title} />
              </div>
              <div className='my-5 flex justify-between md:basis-[40%]'>
                <div className='flex flex-col '>
                  <h3 className='mb-5 text-2xl font-bold'>{food.title}</h3>
                  <p className='text-xl'>${food.price}</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p className='mb-5 text-xl text-sky-600'>{food.shop}</p>
                  <div className='mb-4 flex w-28 justify-between rounded-full border'>
                    <div onClick={() => updateQuantity(food._id, food.quantity + 1)} className='cursor-pointer rounded-full border bg-slate-200 px-2'>
                      +
                    </div>
                    <span>{food.quantity}</span>
                    <div onClick={() => updateQuantity(food._id, food.quantity - 1)} className='cursor-pointer rounded-full border bg-slate-200 px-2'>
                      -
                    </div>
                  </div>
                  <button onClick={() => handleRemoveFromCart(food._id)} className='mt-2 rounded-full border bg-red-300 px-7 py-2'>
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mb-5 px-5 text-right text-2xl'>Total: ${totalSum}</div>
        <div className='flex justify-between gap-8 px-5'>
          <button onClick={handleClearCart} className='rounded-full border bg-red-300 px-8 py-2'>
            clear Cart
          </button>
          <button onClick={() => handleSubmit(user, foodInCart, totalSum)} className='rounded-full border bg-emerald-400 px-8 py-2'>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
