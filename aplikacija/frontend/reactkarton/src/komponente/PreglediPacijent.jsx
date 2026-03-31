import React from 'react'
import OnePregled from './OnePregled'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function PreglediPacijent() {
  
const navigate=useNavigate();
const [pregleds , setPregleds] = useState();

 const userId= window.sessionStorage.getItem("id"); 
 
 
              




useEffect( () => {
    
      if(pregleds == null ){
       
   
 axios.get(`http://127.0.0.1:8000/api/korisnikovipregledi/${userId}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setPregleds(res.data);
          
        }).catch( (e) =>
          console.log(e));
      }
    } );

  return (
    <div>
      <NavBar/>
        
            <h1 className='centriraj'>PREGLEDI</h1>
     <div className='kartica'>
          
       {pregleds == null ? <>"Nema pregleda"</> : pregleds.map( (pregled) =>
      (<OnePregled pregled={pregled} key={pregled.id} />
     )
    )
}
    </div>
     </div>
  )
}

export default PreglediPacijent