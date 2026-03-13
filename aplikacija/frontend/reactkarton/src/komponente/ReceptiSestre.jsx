import React from 'react'
import OneRecept from './OneRecept'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function ReceptiSestre() {

  const [receptJMBG, setReceptJMBG] = useState({
                user_id:"",
             });
  const navigate=useNavigate();
 const [recepts , setRecepts] = useState();

 


function handlePrikazi(e) {     
          
e.preventDefault();  
 axios.get(`http://127.0.0.1:8000/api/korisnikovirecepti/${receptJMBG.user_id}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setRecepts(res.data);
              
})
.catch( (e) =>
           console.log(e));

}



function handleInputJMBG(e) {
        
        let newReceptJMBG = receptJMBG;
        newReceptJMBG[e.target.name] = e.target.value;
                setReceptJMBG(newReceptJMBG);
      } 



 return (
    <div>
      <NavBar/>
        
<h1 className='centriraj'>RECEPTI</h1>
      <form onSubmit={handlePrikazi} >
         <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "user_id" placeholder="jmbg" onInput={handleInputJMBG} /> 
         
<button type="submit" className='dugme'>PRONAĐI</button>       
        
      
              
      <div className='kartica'>
              
                
      
       {recepts == null ? <>"Nema recepata"</> : recepts.map( (recept) =>
      (<OneRecept recept={recept} key={recept.id} />
     )
    )
}
    </div>
    </form> 
    </div>
  )
}

export default ReceptiSestre