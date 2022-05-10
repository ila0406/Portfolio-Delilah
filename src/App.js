// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
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
      
        <h2>About Me</h2>
        <h2>Work</h2>
        <h2>Contact</h2>
        
        <Footer />
    </div>
  );
}

export default App;
