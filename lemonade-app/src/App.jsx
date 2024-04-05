import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Error from "./components/Error";
//import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />

        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
