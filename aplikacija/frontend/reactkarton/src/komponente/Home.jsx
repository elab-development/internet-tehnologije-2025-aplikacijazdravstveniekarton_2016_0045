import React from 'react'
import logo from '../images/logojedan.png';

import NavBar from './NavBar';
import OneKorisnik from './OneKorisnik';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Home() {

 const [korisnik , setKorisnik] = useState();
const userId= window.sessionStorage.getItem("id"); 
 
 
              




useEffect( () => {
    
      if(korisnik == null ){
       
   
 axios.get(`http://127.0.0.1:8000/api/users/${userId}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setKorisnik(res.data);
          
        }).catch( (e) =>
          console.log(e));
      }
    } );





  return (
    <div >
      <NavBar/>
      

        <br/>

        <img src={logo} id="logo" className='slikahome' ></img>
        
      <br/>
       <div>   
    {korisnik && <OneKorisnik korisnik={korisnik} />}
    
  </div>

      <br/>

    </div>
  )
}

export default Home