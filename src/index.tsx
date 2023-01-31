import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { GlobalStyle } from "./styles/globalStyles";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
