import About from "./components/About/About";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products/Products";
import Slider from "./components/Slider";
import Team from "./components/Team/Team";
import Work from "./components/Work/Work";

function App() {
  return (
    <main>
      <Nav />
      <Header />
      <Slider />
      <About />
      <Products />
      <Work />
      <Team />
    </main>
  );
}

export default App;
