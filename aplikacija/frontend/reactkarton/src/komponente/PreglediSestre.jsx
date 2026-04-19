import React from 'react'
import OnePregled from './OnePregled'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function PreglediSestre() {
  
  const [pregledJMBG, setPregledJMBG] = useState({
              user_id:"",
           });
const navigate=useNavigate();
const [pregleds , setPregleds] = useState();

  

function handlePrikazi(e) {     
          
e.preventDefault();  
 axios.get(`http://127.0.0.1:8000/api/korisnikovipregledi/${pregledJMBG.user_id}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              if(res.data.length === 0){
          alert("Nije pronadjen pacijent, pogresan jmbg!")
        }else {
        
              setPregleds(res.data);
        } 
              
})
.catch( (e) =>{
           console.log(e)
           alert("Pogresan unos,pokusajte ponovo!");
})

}



function handleInputJMBG(e) {
        
        let newPregledJMBG = pregledJMBG;
        newPregledJMBG[e.target.name] = e.target.value;
                setPregledJMBG(newPregledJMBG);
      } 




  return (
    <div>
      <NavBar/>
     
          <h1 className='centriraj'>PREGLEDI</h1>
         <form  onSubmit={handlePrikazi} >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "user_id" placeholder="jmbg" onInput={handleInputJMBG}/> 
         
<button type="submit" className='dugme'>PRONAĐI</button>       
        
      
           
     <div className='kartica'>
         
       {pregleds == null ? <>"Nema pregleda"</> : pregleds.map( (pregled) =>
      (<OnePregled pregled={pregled} key={pregled.id} />
     )
    )
}

    </div>
    </form> 
     </div>
  )
}

export default PreglediSestre