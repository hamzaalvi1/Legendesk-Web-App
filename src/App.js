import './App.css';
import NavButton from "./Components/Navbar/NavButton"
import NavMenu from "./Components/Navbar/NavMenu"
import Main from "./Components/Main/Main"
import FrameBox from "./Components/Framebox/FrameBox"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <NavButton/>
    
      <Main/>
      <Footer/>
      <NavMenu/>
      <FrameBox/>
    </div>
    </Router>
  );
}

export default App;
