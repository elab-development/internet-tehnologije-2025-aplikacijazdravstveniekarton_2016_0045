import React from 'react'
import OneBolovanje from './OneBolovanje'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function BolovanjaSestre() {
  const navigate = useNavigate();
  const [bolovanjes , setBolovanjes] = useState();
  const [bolovanjeJMBG, setBolovanjeJMBG] = useState({
           user_id:"",
        });




 

  function handlePrikazi(e) {
        
          
e.preventDefault();  
 axios.get(`http://127.0.0.1:8000/api/korisnikovabolovanja/${bolovanjeJMBG.user_id}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              setBolovanjes(res.data);
              
})
.catch( (e) =>
           console.log(e));

}



function handleInputJMBG(e) {
        
        let newBolovanjeJMBG = bolovanjeJMBG;
        newBolovanjeJMBG[e.target.name] = e.target.value;
                setBolovanjeJMBG(newBolovanjeJMBG);
      } 
    


  return (
    <div>
      <NavBar/>

     
      

<h1 className='centriraj'>BOLOVANJA</h1>
      <form onSubmit={handlePrikazi} >
        <label>Pronađi bolovanja pacijenta:</label>
        <input type="text" name = "user_id" placeholder="jmbg" onInput={handleInputJMBG}  /> 
         
<button type="submit" className='dugme' >PRONAĐI</button>       
        
      
              
     <div className='kartica'>
      
              
             

       {bolovanjes == null ? <>"Nema bolovanja"</> : bolovanjes.map( (bolovanje) =>
      (<OneBolovanje bolovanje={bolovanje} key={bolovanje.id} />
     )
    )
}
    </div>
    </form> 
    </div>
  )
}

export default BolovanjaSestre