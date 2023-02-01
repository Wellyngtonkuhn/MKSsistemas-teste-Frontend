import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Cart from ".";
import { waitFor } from "@testing-library/react";


const renderCart = () => {
  const setShowCart = () => {};
  render(
    <Provider store={store}>
        <Cart setShowCart={setShowCart} />
    </Provider>
  );
};

describe("<Cart />", () => {
  test("should render title Carrinho de compras", () => {
    renderCart();
    const carrinho = screen.getByText("Carrinho");
    const deCompras = screen.getByText("de compras");

    expect(carrinho).toBeInTheDocument();
    expect(deCompras).toBeInTheDocument();
  });

  test("should render btnCloseCart", () => {
    renderCart();
    const btnCloseCart = screen.getByText("X");

    expect(btnCloseCart).toBeInTheDocument();
  });

  // test("should render btnRemoveFromCart", async () => {
  //   renderCart();
  //   await waitFor(() => {
  //     const btnRemoveFromCart = screen.queryByText("x");
  //     expect(btnRemoveFromCart).toBeInTheDocument();
  //   })
  // });

  // test("should render product image", async () => {
  //   renderCart();
  //   await waitFor(() => {
  //     const productImage = screen.queryByRole("productImg");
  //     expect(productImage).toBeTruthy(); 
  //   }) 
  // });

  // test("should render product image", async () => {
  //   renderCart();
  //   const productImage = await screen.queryByRole("img");

  //   expect(productImage).toBeInTheDocument();
  // });

  // test("should render product name", async () => {
  //   renderCart();
  //   const productName = await screen.queryByRole("definition");

  //   expect(productName).toBeInTheDocument();
  // });

  // test("should render product quantity text", async () => {
  //   renderCart();
  //   const productQuantityText = await screen.queryByTestId('qtdText')

  //   expect(productQuantityText).toBeInTheDocument();
  // });

  // testar o botão de adicionar para baixo até o footer


  
  test("should render product total price", async () => {
    renderCart();
    const productTotalPrice = await screen.findByTestId('totalPrice')

    expect(productTotalPrice).toBeInTheDocument();
  });

  test("should render btn finalizar compra", async () => {
    renderCart();
    const btnFinalizarCompra = await screen.findByTestId('btnFinalizarCompra')

    expect(btnFinalizarCompra).toBeInTheDocument(); 
  });

});
