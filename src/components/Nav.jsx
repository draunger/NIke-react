import  {Link} from "react-router-dom";
import { useState } from 'react';
// import Content from ".Content.jsx";
// import About from ".About.jsx";
function Nav (){
const [color, colorText] = useState('white');
  let c = 0;
  function change(c)
  {
    if(c%2!=0){
    document.body.style.backgroundColor = 'darkgrey';
    colorText('grey');
    if(document.body.style.color==='black')
    document.body.style.color = 'white';
    }
    else{
    document.body.style.backgroundColor = 'white';
    colorText('white');
    document.body.style.color = 'black';
    }
  }
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
    <button onClick={()=>change(c+=1)}>{color}</button>
       </div>
    
    </nav>
   </div>
    );
    
  
};
export default Nav;