import React from 'react'
import NavBar from './NavBar'
import  { useState } from 'react';
import axios from 'axios';


function AddPregled() {

const [pregledData, setPregledData] = useState({
        dijagnoza:"",
        anamneza: "",
        datumPregleda: "",
        pregledaoLekar:"",
        user_id: "",
        
      });

      function handleInput(e) {
        
        let newPregledData = pregledData;
        newPregledData[e.target.name] = e.target.value;
                setPregledData(newPregledData);
      } 
    
      function handleDodavanje(e) {
        e.preventDefault();  
       
                axios.post("http://127.0.0.1:8000/api/addpregled",pregledData,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {
               
         console.log(res.data);
         alert("Pregled je uspesno kreiran!");  
               
        
      }
        )
         .catch( (e) =>{
           console.log(e)
           alert("Pogresan unos,pokusajte ponovo!");
})
      } 


  return (
    <div>
        <NavBar/>

      <h1 className='centriraj'>Kreiraj pregled</h1>
      <form onSubmit={handleDodavanje}  className="forma">
        <label>Anamneza:</label>
                <input type="text" name = "anamneza" onInput={handleInput} />

         <label>Dijagnoza:</label>
        <input type="text" name = "dijagnoza" onInput={handleInput} />

         <label>Datum pregleda:</label>
        <input type="text" name = "datumPregleda" placeholder="godina-mesec-dan primer: 2020-01-22" onInput={handleInput} />

        
        <label>Pregledao Lekar:</label>
        <input type="text" name = "pregledaoLekar" onInput={handleInput} />
        
        <label>JMBG pacijenta:</label>
        <input type="text" name = "user_id" onInput={handleInput} />      
        
        <button className='dugme' type="submit">SAČUVAJ PREGLED</button>
        
      </form>
      
    </div>
  )
}

export default AddPregled