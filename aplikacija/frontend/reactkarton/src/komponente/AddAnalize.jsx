import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"


function AddAnalize() {
  return (
    <div>
<button className="nazad">
    <IoArrowBackCircle />
</button>
      <h2>Kreiraj analizu</h2>
      <form action= "submit" method="POST">
        <label>Rezultat:</label>
        <textarea name="rezultat" rows= "5" cols="200"> 
        </textarea>

        <label>Izdao Lekar:</label>
        <input type="text" name = "Izdao lekar" />
        
        <label>Datum analize:</label>
        <input type="text" name = "datum_analize"
                   />
        
        
        <button type="submit" >SAČUVAJ ANALIZU</button>
        
      </form>
    </div>
  )
}

export default AddAnalize
