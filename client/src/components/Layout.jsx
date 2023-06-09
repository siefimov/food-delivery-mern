import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const setActive = ({ isActive }) => (isActive ? "text-sky-600" : "");

const Layout = () => {
  const qtyItemsInCart = useSelector((state) => state.cart.cart.length);

  return (
    <div className='flex flex-col '>
      <header className='bg-slate-200 px-3 py-5 pl-8 text-2xl fixed w-[100vw]'>
        <div className='relative ml-8 max-w-max'>
          <NavLink to='/' className={setActive}>
            Shop
          </NavLink>
          <span className="mx-0"> | </span>
          <NavLink to='cart' className={setActive}>
            Shopping Cart
          </NavLink>
          <div className='absolute right-[-20px] top-[-10px] rounded-full border border-sky-600 px-2 text-sm'>{qtyItemsInCart}</div>
        </div>
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
