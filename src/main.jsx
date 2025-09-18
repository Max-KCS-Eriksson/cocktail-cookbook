import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import CocktailCookbook from "./CocktailCookbook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CocktailCookbook />
  </StrictMode>,
);
