import React from 'react'
import OneUput from './OneUput'
import { IoArrowBackCircle } from 'react-icons/io5';
import { BiAlignLeft } from 'react-icons/bi';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function UputiSestre() {
  const navigate=useNavigate();
   const [uputs , setUputs] = useState();
   const [uputJMBG, setUputJMBG] = useState({
                   user_id:"",
                });



 function handlePrikazi(e) {     
          
e.preventDefault();  
 axios.get(`http://127.0.0.1:8000/api/korisnikoviuputi/${uputJMBG.user_id}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setUputs(res.data);
              
})
.catch( (e) =>
           console.log(e));

}



function handleInputJMBG(e) {
        
        let newUputJMBG = uputJMBG;
        newUputJMBG[e.target.name] = e.target.value;
                setUputJMBG(newUputJMBG);
      } 



  return (
    <div>
      <NavBar/>
       
<h1 className='centriraj'>UPUTI</h1>

      <form onSubmit={handlePrikazi} >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "user_id" placeholder="jmbg" onInput={handleInputJMBG} /> 
         
<button type="submit" className='dugme'>PRONAĐI</button>       
        
      
      
              
     <div className='kartica'>
      
            
              
      {uputs == null ? <>"Nema uputa"</> : uputs.map( (uput) =>
      (<OneUput uput={uput} key={uput.id} />
     )
    )
}
    </div>
    </form> 
    </div>
  )
}

export default UputiSestre
