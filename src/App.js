// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import MyImages from "./images/ME.jpg"
import AboutMe from "./components/AboutMe/AboutMe"
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Test from "./pages/Test"

function App() {

    
  return (
    <div className="App">
         {/* <Test /> */}
        <header>
        <h1>Delilah Haas</h1>
        <Navbar />
        <img class="me-image" src={MyImages} alt="Delilah Haas"/>    
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
