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
      <Header />
      <main id="main">
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Portfolio />
        <Contact />
      </main>

        <Footer />
        <ScrollUp />
    </>
  );
}

export default App;
