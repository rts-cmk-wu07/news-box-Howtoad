import { createContext } from "react";

const categoryContext = createContext([
  "world",
  "health",
  "sports",
  "business",
  "travel",
]);

export default categoryContext;
