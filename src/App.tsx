import About from "./components/About/About";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Partner from "./components/Partner";
import Products from "./components/Products/Products";
import Slider from "./components/Slider";
import Team from "./components/Team/Team";
import Work from "./components/Work/Work";

function App() {
  return (
    <main className="scroll-smooth">
      <Nav />
      <Header />
      <Slider />
      <About />
      <Products />
      <Work />
      <Team />
      <Partner />
      <Footer />
    </main>
  );
}

export default App;
