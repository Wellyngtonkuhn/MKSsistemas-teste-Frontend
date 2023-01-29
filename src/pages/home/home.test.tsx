import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from ".";

const Render = () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

describe("Home - Products", () => {
  test("should render all products info", async () => {
    Render();

    const cardItems = await screen.findAllByTestId("cardItems");
    expect(cardItems.length).toBe(8);
  });

  test("should render products image", async () => {
    Render();

    const productImage = await screen.findAllByRole("img");
    expect(productImage).toBeTruthy();
  });

  test("should render products info", async () => {
    Render();

    const contentInfo = await screen.findAllByRole("contentinfo");
    expect(contentInfo).toBeTruthy();
  });

  test("should render button Comprar", async () => {
    Render();

    const btnComprar = await screen.findAllByRole("button");
    expect(btnComprar).toBeTruthy();
  });
});
