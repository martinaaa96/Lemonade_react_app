import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { ProductProvider } from "../../lemonade-app/src/context/ProductContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Error from "./components/Error";
//import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />

        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </ProductProvider>
  );
}

export default App;
