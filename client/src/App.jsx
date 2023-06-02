import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import { Cart } from "./pages/Cart";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
