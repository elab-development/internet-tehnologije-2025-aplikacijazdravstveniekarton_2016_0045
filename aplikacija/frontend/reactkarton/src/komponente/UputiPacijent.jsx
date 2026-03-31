import React from 'react'
import OneUput from './OneUput'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function UputiPacijent() {
  const navigate=useNavigate();
   const [uputs , setUputs] = useState();

 const userId= window.sessionStorage.getItem("id"); 
 
 
              




useEffect( () => {
    
      if(uputs == null ){
       
   
 axios.get(`http://127.0.0.1:8000/api/korisnikoviuputi/${userId}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setUputs(res.data);
          
        }).catch( (e) =>
          console.log(e));
      }
    } );



  return (
    <div>
      <NavBar/>
      
      <h1 className='centriraj'>UPUTI</h1>
              
     <div className='kartica'>
      
            
              
      {uputs == null ? <>"Nema uputa"</> : uputs.map( (uput) =>
      (<OneUput uput={uput} key={uput.id} />
     )
    )
}
    </div>
    </div>
  )
}

export default UputiPacijent
