import React from 'react'
import OneRecept from './OneRecept'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

function Recepti() {
  const navigate=useNavigate();
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
      <OneRecept/>
      <OneRecept/>
    </div>
    </div>
  )
}

export default Recepti
