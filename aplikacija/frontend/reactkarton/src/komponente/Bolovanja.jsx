import React from 'react'
import OneBolovanje from './OneBolovanje'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

function Bolovanja() {
  const navigate = useNavigate();
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
      <OneBolovanje />
       <OneBolovanje />
       <OneBolovanje />
    </div>
    </div>
  )
}

export default Bolovanja
