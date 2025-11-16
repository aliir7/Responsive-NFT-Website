import About from "./components/About/About";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products/Products";
import Slider from "./components/Slider";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Slider />
      <About />
      <Products />
      <Work />
    </>
  );
}

export default App;
