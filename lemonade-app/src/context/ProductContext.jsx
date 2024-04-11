import { createContext, useState } from "react";
import { data } from "../utils/data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [showProducts, setShowProducts] = useState(4);
  const [hideProducts, setHideProducts] = useState(0);

  const loadButton = () => {
    setShowProducts((firstProducts) => firstProducts + 4);
    setHideProducts((lastProducts) => lastProducts + 4);
  };

  const backButton = () => {
    setShowProducts((firstProducts) => firstProducts - 4);
    setHideProducts((lastProduct) => lastProduct - 4);
  };

  const [products, setProducts] = useState(data);

  const [sortBy, setSortBy] = useState("none");

  const sortProducts = (sortedBy) => {
    let sortedProducts = [...products];

    if (sortedBy === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortedBy === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortedBy === "name-asc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortedBy === "name-desc") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortedBy === "none") {
      sortedProducts = data;
    }

    setSortBy(sortedBy);
    setProducts(sortedProducts);
  };

  const [cart, setToCart] = useState([]);

  const addToCart = (productAdd) => {
    setToCart([...cart, productAdd]);
  };

  const contextValues = {
    data: products,
    showProducts,
    hideProducts,
    loadButton,
    backButton,
    setSortBy: sortProducts,
    cart,
    addToCart,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};
