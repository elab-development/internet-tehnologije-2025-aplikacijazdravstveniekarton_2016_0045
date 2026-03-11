import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"
import NavBar from './NavBar'
import  { useState } from 'react';
import axios from 'axios';


function AddRecept() {

const [receptData, setReceptData] = useState({
        lekovi:"",
        datumIzdavanja: "",
        izdaoLekar:"",
        user_id: "",
        
      });

      function handleInput(e) {
        
        let newReceptData = receptData;
        newReceptData[e.target.name] = e.target.value;
                setReceptData(newReceptData);
      } 
    
      function handleDodavanje(e) {
        e.preventDefault();  
       
                axios.post("http://127.0.0.1:8000/api/addrecept",receptData,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {
               
         console.log(res.data);
               
        
      }
        )
      } 



  return (



    <div>
        <NavBar/>

      <h1 className='centriraj'>Kreiraj recept</h1>
      <form onSubmit={handleDodavanje}   className="forma">
        <label>Lek:</label>
        <input type="text" name = "lekovi" onInput={handleInput} />

         <label>Datum izdavanja:</label>
        <input type="text" name = "datumIzdavanja" onInput={handleInput} />

       

        <label>Izdao Lekar:</label>
        <input type="text" name = "izdaoLekar" onInput={handleInput} />
        
        <label>JMBG pacijenta:</label>
        <input type="text" name = "user_id" onInput={handleInput} />      
        
         <button className='dugme' type="submit">SAČUVAJ RECEPT</button>
        
      </form>
     
    </div>
  )
}

export default AddRecept