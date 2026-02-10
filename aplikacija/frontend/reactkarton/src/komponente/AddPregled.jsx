import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"


function AddPregled() {
  return (
    <div>
<button className="dugmenazad">
    <IoArrowBackCircle />
</button>
      <h1 className='centriraj'>Kreiraj pregled</h1>
      <form action= "submit" method="POST" className="forma">
        <label>Anamneza:</label>
        <textarea name="rezultat" rows= "5" cols="200"> 
        </textarea>

         <label>Dijagnoza:</label>
        <input type="text" name = "Dijagnoza" />

         <label>Datum pregleda:</label>
        <input type="text" name = "Datum pregleda" />

        
        <label>Pregledao Lekar:</label>
        <input type="text" name = "Pregldao lekar" />
        
              
        
        
        
      </form>
      <button className='dugme'>SAČUVAJ PREGLED</button>
    </div>
  )
}

export default AddPregled