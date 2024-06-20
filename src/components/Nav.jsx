import  {Link} from "react-router-dom";
// import Content from ".Content.jsx";
// import About from ".About.jsx";
function Nav (){
    return (
        <div>
    <nav>
       <div className="navigator">

       <img src="./images/brand_logo.png" alt="logo" />

      <ul>
        <li><Link to="/">HOME</Link></li> 
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/menu">MENU</Link></li>
      </ul>

    <button>Login</button>
       </div>
    
    </nav>
   </div>
    );
    
  
};
export default Nav;