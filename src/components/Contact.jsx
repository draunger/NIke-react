import css from "../local-css/contact.module.css";
import { useState } from 'react';
const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setmail] = useState('');
  const [text, settext] = useState('');
  const [buttonText, setButtonText] = useState('SUBMIT');
  function execute() {
    if(mail!==''&&name!==''&&text!==''){
      setButtonText("SUBMITTED");
      setName("");
      setmail("");
      settext("");
    setTimeout(() => {
      setButtonText("SUBMIT")
    },1000);
  }
  else{
    setButtonText("NOT-SUBMITTED");
    setTimeout(() => {
      setButtonText("SUBMIT")
    },1000);
  }   
  }
  return (
    <div className={css.contact}>
      <h4>CONTACT US</h4>
      
      <p className={css.para}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
       <div className={css.contactbuttons}>
       <button className={css.buttons1} >VIA SUPPORT CHAT</button>
       <button className={css.buttons2}>VIA CALL</button>
        </div>   
        
   <input type="text" placeholder="NAME" className={css.text}  value={name}
        onChange={e => setName(e.target.value)}/>
    <input type="text" placeholder="EMAIL"className={css.text}  value={mail}
        onChange={e => setmail(e.target.value)}/>
    <input type="text" placeholder="ENTER YOUR QUERY" className={css.text1}  value={text}
        onChange={e => settext(e.target.value)}/>
        <button onClick={execute} className={css.buttons1}>{buttonText}</button>   
       
    </div>
  )
}

export default Contact;
