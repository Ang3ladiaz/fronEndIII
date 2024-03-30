import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favs from "./pagues/Favs.jsx";
import Contact from "./pagues/Contact.jsx";
import Detail from "./pagues/Detail";
import Home from "./pagues/Home";
import Layout from "./Components/layout/Layout";

import ProductContext from "./Components/utils/global.context.jsx";

function App() {
  return (
    <BrowserRouter>
      <ProductContext>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail:id" element={<Detail />} />
          </Route>
          <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
      </ProductContext>
    </BrowserRouter>
  );
}

export default App;
