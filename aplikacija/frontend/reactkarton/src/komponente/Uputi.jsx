import React from 'react'
import OneUput from './OneUput'
import { IoArrowBackCircle } from 'react-icons/io5';
import { BiAlignLeft } from 'react-icons/bi';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Uputi() {
  const navigate=useNavigate();
   const [uputs , setUputs] = useState();

  useEffect(()=> {
if(uputs == null){

axios.get("http://127.0.0.1:8000/api/uputs",{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {

        
        console.log(res.data);
              setUputs(res.data);
              
});

}
  } ,[uputs]
  );




  return (
    <div>
      <NavBar/>
      <form action= "submit" >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "Unesi JMBG pacijenta:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form> 
      <h1 className='centriraj'>UPUTI</h1>
              
     <div className='kartica'>
      
          <button  className='dugme' onClick={()=>navigate('/AddUput')}>dodaj nov uput</button>     
              
      {uputs == null ? <>"Nema uputa"</> : uputs.map( (uput) =>
      (<OneUput uput={uput} key={uput.id} />
     )
    )
}
    </div>
    </div>
  )
}

export default Uputi
