import "./styles/main.scss";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollUp from "./components/scrollUp";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <>
      <main id="main">
        <Header />
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>

    </>
  );
}

export default App;
