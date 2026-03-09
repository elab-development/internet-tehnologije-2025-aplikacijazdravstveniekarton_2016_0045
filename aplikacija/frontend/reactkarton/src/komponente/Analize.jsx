import React from 'react'
import OneAnaliza from './OneAnaliza';
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Analize({ token }) {
 
  const navigate=useNavigate();
  const[analizas , setAnalizas]=useState();
  useEffect(()=> {
if(analizas == null){

axios.get("http://127.0.0.1:8000/api/analizas").then((res)=> {

        
        console.log(res.data);
  setAnalizas(res.data.analizas);
});

}
  } ,[analizas]
  );




  return (
    <div>
      <NavBar/>
      
        <form action= "submit" >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "Unesi JMBG pacijenta:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form> 
      
        <h1 className='centriraj'>ANALIZE</h1>
    <div className='kartica'>
        
         <button  className='dugme' onClick={()=>navigate('/AddAnalize')}>dodaj novu analizu</button>   
     {analizas == null ? <></> : analizas.map((analiza)=>(
      <OneAnaliza analiza={analiza} key={analiza.id}/>
     )
    )
    } 
    </div>
    </div>
  )
}

export default Analize
