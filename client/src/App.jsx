import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Shop from "../pages/Shop";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
