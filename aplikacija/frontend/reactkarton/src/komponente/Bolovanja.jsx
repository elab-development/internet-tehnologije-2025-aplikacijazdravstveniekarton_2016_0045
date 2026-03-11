import React from 'react'
import OneBolovanje from './OneBolovanje'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Bolovanja() {
  const navigate = useNavigate();
  const [bolovanjes , setBolovanjes] = useState();

  useEffect(()=> {
if(bolovanjes == null){

axios.get("http://127.0.0.1:8000/api/bolovanjes",{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {

        
        console.log(res.data);
              setBolovanjes(res.data);
              
});

}
  } ,[bolovanjes]
  );


  return (
    <div>
      <NavBar/>
      <form action= "submit" >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "Unesi JMBG pacijenta:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form> 
              <h1 className='centriraj'>BOLOVANJA</h1>
     <div className='kartica'>
      
              
              <button  className='dugme' onClick={()=>navigate('/AddBolovanje')}>dodaj novo bolovanje</button> 

       {bolovanjes == null ? <>"Nema bolovanja"</> : bolovanjes.map( (bolovanje) =>
      (<OneBolovanje bolovanje={bolovanje} key={bolovanje.id} />
     )
    )
}
    </div>
    </div>
  )
}

export default Bolovanja
