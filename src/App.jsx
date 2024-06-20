import "./App.css";
import Nav from "./components/Nav.jsx";
import Content from "./components/Content.jsx";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
function App (){
  return (
      <Router>
  <div>
     <Nav/>

      <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
      </Routes>

  </div>
     </Router>
  );
};
export default App;