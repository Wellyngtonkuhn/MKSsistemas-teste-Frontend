import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App";
import { GlobalStyle } from "./styles/globalStyles";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <App />
  </QueryClientProvider>
);
