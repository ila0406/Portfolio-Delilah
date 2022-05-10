// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import AboutMe from "./components/AboutMe/AboutMe"
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {

    
  return (
    <div className="App">
        <header>
        <h1>Delilah Haas</h1>
        <Navbar />
        <img class="me-image" src="/images/ME.jpg" alt="Delilah Haas"/>    
        </header>
        <div id="hero-image" title="Night sky at dusk - banner image"></div>    
      
        <AboutMe />

        <Work />

        <Contact />
        
        <Footer />
    </div>
  );
}

export default App;
