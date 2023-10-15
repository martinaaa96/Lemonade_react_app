import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Error from "./components/Error";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Menu />
      <About />
      <Error />
      <Footer />
    </div>
  );
}

export default App;
