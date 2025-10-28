import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);
