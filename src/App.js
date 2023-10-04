import logo from "./logo.svg";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import "./App.css";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutSection from "./Components/AboutSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Features />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
