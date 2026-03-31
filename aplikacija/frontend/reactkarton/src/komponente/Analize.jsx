import React from 'react'
import OneAnaliza from './OneAnaliza';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';


const Analize = () => {
 const [analizaJMBG, setAnalizaJMBG] = useState({
            user_id:"",
         });
  const navigate=useNavigate();
  const [analizas , setAnalizas] = useState();




function handlePrikazi(e) {     
          
e.preventDefault();  
 axios.get(`http://127.0.0.1:8000/api/korisnikoveanalize/${analizaJMBG.user_id}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setAnalizas(res.data);
              
})
.catch( (e) =>
           console.log(e));

}



function handleInputJMBG(e) {
        
        let newAnalizaJMBG = analizaJMBG;
        newAnalizaJMBG[e.target.name] = e.target.value;
                setAnalizaJMBG(newAnalizaJMBG);
      } 






  return (
    <div>
      <NavBar/>
       <button className='dugme'  onClick={()=>navigate('/AddAnalize')}>dodaj novu analizu</button>  
       <h1 className='centriraj'>ANALIZE</h1>
       
       
       <br/>
        <form onSubmit={handlePrikazi}   >
        <label>Pronađi analize:</label>
        <input type="text" name = "user_id" placeholder="jmbg" onInput={handleInputJMBG} /> 
         
<button type="submit" className='dugme' >PRONAĐI</button>       
        
      
      
       
    <div className='kartica'>
        
        
         
      <div>   
     {analizas == null ? <>"Nema analiza"</> : analizas.map( (analiza) =>
      (<OneAnaliza analiza={analiza} key={analiza.id} />
     )
    )
}
    
  </div>
    </div>
    </form> 
    </div>
  )
}

export default Analize
