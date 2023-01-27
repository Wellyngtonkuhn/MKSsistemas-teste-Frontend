import { render, screen } from "@testing-library/react";
import Header from ".";
import { CartImage } from "../../assests";

describe("<Header />", () => {
  test("render a title", () => {
    render(<Header />);

    const title = screen.getByText("MKS");

    expect(title).toBeInTheDocument();
  });

  test("render a subTitle", () => {
    render(<Header />);

    const subTitle = screen.getByText("Sistemas");

    expect(subTitle).toBeInTheDocument();
  });
});

describe("Show cart and icon and quantity", () => {
  test("render cart image", () => {
    render(<Header />);

    const cartImage = screen.getByRole("img");
    expect(cartImage).toHaveAttribute("src", CartImage);
    expect(cartImage).toHaveAttribute("alt", "Imagem do carinho");
  });

  test("should render 0 for initital quantity cart", () => {
    render(<Header />);

    const cartQuantity = screen.getByRole("paragraph");

    expect(cartQuantity).toHaveTextContent("0");
  });
});
