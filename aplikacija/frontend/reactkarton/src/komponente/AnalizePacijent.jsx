import React from 'react'
import OneAnaliza from './OneAnaliza';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

const AnalizePacijent = () => {
 
  const navigate=useNavigate();
  const [analizas , setAnalizas] = useState();
const userId= window.sessionStorage.getItem("id"); 
 
 
              




useEffect( () => {
    
      if(analizas == null ){
       
   
 axios.get(`http://127.0.0.1:8000/api/korisnikoveanalize/${userId}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setAnalizas(res.data);
          
        }).catch( (e) =>
          console.log(e));
      }
    } );






  return (
    <div>
      <NavBar/>
      
        
      
        <h1 className='centriraj'>ANALIZE</h1>
    <div className='kartica'>
        
       
         
      <div>   
     {analizas == null ? <>"Nema analiza"</> : analizas.map( (analiza) =>
      (<OneAnaliza analiza={analiza} key={analiza.id} />
     )
    )
}
    
  </div>
    </div>
    </div>
  )
}

export default AnalizePacijent
