import React from 'react'
import OnePregled from './OnePregled'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';

function Pregledi() {
  
const navigate=useNavigate();
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
      <OnePregled />
      <OnePregled />
      <OnePregled />
    </div>
     </div>
  )
}

export default Pregledi
