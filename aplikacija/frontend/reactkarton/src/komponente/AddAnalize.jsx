import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"
import NavBar from './NavBar'


function AddAnalize() {
  return (
    <div>
      <NavBar/>

      <h1 className='centriraj'>Kreiraj analizu</h1>
      <form action= "submit" method="POST" className="forma">
        <label>Rezultat:</label>
        <textarea name="rezultat" rows= "5" cols="200"> 
        </textarea>

        <label>Izdao Lekar:</label>
        <input type="text" name = "Izdao lekar" />
        
        <label>Datum analize:</label>
        <input type="text" name = "datum_analize"
                   />
        
        
        
        
      </form>
      <button className='dugme'>SAČUVAJ ANALIZU</button>
    </div>
  )
}

export default AddAnalize
