import React from 'react'
import OneBolovanje from './OneBolovanje'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function BolovanjaPacijent() {
  const navigate = useNavigate();
  const [bolovanjes , setBolovanjes] = useState();
 const userId= window.sessionStorage.getItem("id"); 
 
 
              




useEffect( () => {
    
      if(bolovanjes == null ){
       
   
 axios.get(`http://127.0.0.1:8000/api/korisnikovabolovanja/${userId}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setBolovanjes(res.data);
          
        }).catch( (e) =>
          console.log(e));
      }
    } );

  return (
    <div>
      <NavBar/>
      
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

export default BolovanjaPacijent