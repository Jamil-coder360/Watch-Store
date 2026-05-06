import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { store } from "./store.js";
import { Provider } from "react-redux";
import ThemeProvider from "./context/ThemeContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <App />
          <ToastContainer position="top-left" style={{ zIndex: 10000 }} />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
