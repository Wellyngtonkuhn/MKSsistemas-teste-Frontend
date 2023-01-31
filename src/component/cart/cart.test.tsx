import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Cart from ".";

const renderCart = () => {
  const setShowCart = () => {};
  render(
    <Provider store={store}>
        <Cart setShowCart={setShowCart} />
    </Provider>
  );
};

describe("<Cart />", () => {
  test("should render Caringo de compras", () => {
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

  test("should render btnRemoveFromCart", async () => {
    renderCart();
    const btnRemoveFromCart = await screen.findByText("x");

    expect(btnRemoveFromCart).toBeInTheDocument();
  });

  test("should render product image", async () => {
    renderCart();
    const productImage = await screen.findByRole("img");

    expect(productImage).toBeInTheDocument();
  });

  test("should render product name", async () => {
    renderCart();
    const productName = await screen.findByRole("definition");

    expect(productName).toBeInTheDocument();
  });

  test("should render product quantity text", async () => {
    renderCart();
    const productQuantityText = await screen.findByTestId('qtdText')

    expect(productQuantityText).toBeInTheDocument();
  });

  // testar o botão de adicionar para baixo até o footer



});
