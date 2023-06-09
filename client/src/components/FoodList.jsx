import React from "react";

const FoodList = ({item, handleIsClicked}) => {
  return (
    <div className='rounded-xl border bg-slate-100 p-5 md:flex'>
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
  );
};

export default FoodList;
