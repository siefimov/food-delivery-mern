import React from "react";

const ShopButton = ({ activeButton, title, handleShopButtonClick, shop }) => {
  return (
    <button
      onClick={() => handleShopButtonClick(title)}
      className={`rounded border py-2 text-xl hover:bg-sky-300 disabled:bg-slate-50 ${activeButton === shop.title ? "bg-sky-200" : "bg-sky-100"}`}
      disabled={activeButton && activeButton !== shop.title}
    >
      {shop.title}
    </button>
  );
};

export default ShopButton;
