import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";


import Header from ".";
import { CartImage } from "../../assests";

const renderHeader = () => {
  const setShowCart = () => {}
  render(
    <Provider store={store}>
      <Header setShowCart={setShowCart} />
    </Provider>
  );
};

describe("<Header />", () => {
  test("render a title", () => {
    renderHeader();

    const title = screen.getByText("MKS");

    expect(title).toBeInTheDocument();
  });

  test("render a subTitle", () => {
    renderHeader();

    const subTitle = screen.getByText("Sistemas");

    expect(subTitle).toBeInTheDocument();
  });
});

describe("Show cart and icon and quantity", () => {
  test("render cart image", () => {
    renderHeader();

    const cartImage = screen.getByRole("img");
    expect(cartImage).toHaveAttribute("src", CartImage);
    expect(cartImage).toHaveAttribute("alt", "Imagem do carinho");
  });

  test("should render 0 for initital quantity cart", () => {
    renderHeader();

    const cartQuantity = screen.getByRole("paragraph");

    expect(cartQuantity).toHaveTextContent("0");
  });
});
