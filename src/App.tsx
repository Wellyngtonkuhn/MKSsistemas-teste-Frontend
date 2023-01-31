import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./component/header";
import Cart from "./component/cart";
import Rotas from "./rotas";
import Footer from "./component/footer";

export default function App() {
  const [showCart, setShowCart] = useState<boolean>(false)

  return (
    <BrowserRouter >
      <Header setShowCart={setShowCart}/> 
        {showCart && <Cart setShowCart={setShowCart}/>}
        <Rotas />
      <Footer /> 
      <ToastContainer /> 
    </BrowserRouter>
  );
}
