import React from 'react'
import OneRecept from './OneRecept'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Recepti() {
  const navigate=useNavigate();
 const [recepts , setRecepts] = useState();

  useEffect(()=> {
if(recepts == null){

axios.get("http://127.0.0.1:8000/api/recepts",{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {

        
        console.log(res.data);
              setRecepts(res.data);
              
});

}
  } ,[recepts]
  );




 return (
    <div>
      <NavBar/>
      <form action= "submit" >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "Unesi JMBG pacijenta:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form> 
              <h1 className='centriraj'>RECEPTI</h1>
      <div className='kartica'>
              
                <button  className='dugme' onClick={()=>navigate('/AddRecept')}>dodaj nov recept</button>   
      
       {recepts == null ? <>"Nema recepata"</> : recepts.map( (recept) =>
      (<OneRecept recept={recept} key={recept.id} />
     )
    )
}
    </div>
    </div>
  )
}

export default Recepti
