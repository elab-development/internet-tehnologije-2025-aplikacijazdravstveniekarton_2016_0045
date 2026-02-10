import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"
import NavBar from './NavBar'


function AddUput() {
  return (
    <div>
        <NavBar/>
<button className="dugmenazad">
    <IoArrowBackCircle />
</button>
      <h1 className='centriraj'>Kreiraj uput</h1>
      <form action= "submit" method="POST" className="forma">
        <label>Uput za:</label>
        <input type="text" name = "Uput za" />

         <label>Datum uputa:</label>
        <input type="text" name = "Datum uputa" />

        
        <label>Izdao Lekar:</label>
        <input type="text" name = "Izdao lekar" />
        
              
        
        
        
      </form>
      <button className='dugme'>SAČUVAJ UPUT</button>
    </div>
  )
}

export default AddUput