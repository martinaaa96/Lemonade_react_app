import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [showProducts, setShowProducts] = useState(4);

  const loadButton = () => {
    setShowProducts((firstProducts) => firstProducts + 4);
  };

  return (
    <ProductProvider value={{ showProducts, loadButton }}>
      {children}
    </ProductProvider>
  );
};
