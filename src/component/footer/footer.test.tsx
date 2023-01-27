import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("<Footer />", () => {
  test("render footer content", () => {
    render(<Footer />);

    const footerContent = screen.getByText(
      "MKS sistemas © Todos os direitos reservados"
    );

    expect(footerContent).toBeInTheDocument();
  });  
});
