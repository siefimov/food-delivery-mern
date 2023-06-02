import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <header className='bg-slate-200 px-3 py-3'>
        <NavLink to='/'>Shop</NavLink>
        <span> | </span>
        <NavLink to='cart'>Shopping Cart</NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
