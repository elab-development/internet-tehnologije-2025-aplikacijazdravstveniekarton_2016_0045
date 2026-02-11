import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"
import NavBar from './NavBar'


function AddBolovanje() {
  return (
    <div>
        <NavBar/>

      <h1 className='centriraj'>Kreiraj bolovanje</h1>
      <form action= "submit" method="POST" className="forma">
        <label>Datum od:</label>
        <input type="text" name = "Datum od" />

         <label>Datum do:</label>
        <input type="text" name = "Datum do" />

        <label>Dijagnoza:</label>
        <input type="text" name = "Dijagnoza" />

        <label>Izdao Lekar:</label>
        <input type="text" name = "Izdao lekar" />
        
              
        
        
        
      </form>
      <button className='dugme'>SAČUVAJ BOLOVANJE</button>
    </div>
  )
}

export default AddBolovanje