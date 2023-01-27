import Header from "./component/header";
import { BrowserRouter } from "react-router-dom";

import Footer from "./component/footer";

import Cart from "./component/cart";
import Rotas from "./rotas";

export default function App() {
  return (
    <>
    <BrowserRouter >
      <Header />
        {/* <Cart />
        <Rotas />
      <Footer />   */}
    </BrowserRouter>
    </>
  );
}
