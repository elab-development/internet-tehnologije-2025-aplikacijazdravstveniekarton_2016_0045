import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"
import NavBar from './NavBar'


function AddRecept() {
  return (
    <div>
        <NavBar/>
<button className="dugmenazad">
    <IoArrowBackCircle />
</button>
      <h1 className='centriraj'>Kreiraj recept</h1>
      <form action= "submit" method="POST" className="forma">
        <label>Lek:</label>
        <input type="text" name = "Lek" />

         <label>Datum izdavanja:</label>
        <input type="text" name = "Datum izdavanja" />

       

        <label>Izdao Lekar:</label>
        <input type="text" name = "Izdao lekar" />
        
              
        
        
        
      </form>
      <button className='dugme'>SAČUVAJ RECEPT</button>
    </div>
  )
}

export default AddRecept