import React from 'react'
import OnePregled from './OnePregled'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Pregledi() {
  
const navigate=useNavigate();
const [pregleds , setPregleds] = useState();

  useEffect(()=> {
if(pregleds == null){

axios.get("http://127.0.0.1:8000/api/pregleds",{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {

        
        console.log(res.data);
              setPregleds(res.data);
              
});

}
  } ,[pregleds]
  );

  return (
    <div>
      <NavBar/>
         <form action= "submit" >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "Unesi JMBG pacijenta:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form> 
            <h1 className='centriraj'>PREGLEDI</h1>
     <div className='kartica'>
      <button  className='dugme' onClick={()=>navigate('/AddPregled')}>dodaj novi pregled</button>     
       {pregleds == null ? <>"Nema pregleda"</> : pregleds.map( (pregled) =>
      (<OnePregled pregled={pregled} key={pregled.id} />
     )
    )
}
    </div>
     </div>
  )
}

export default Pregledi
