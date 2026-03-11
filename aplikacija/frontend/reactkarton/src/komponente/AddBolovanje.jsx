import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"
import NavBar from './NavBar'
import  { useState } from 'react';
import axios from 'axios';


function AddBolovanje() {

const [bolovanjeData, setBolovanjeData] = useState({
        dijagnoza:"",
        datumOd: "",
        datumDo: "",
        izdaoLekar:"",
        user_id: "",
        
      });

      function handleInput(e) {
        
        let newBolovanjeData = bolovanjeData;
        newBolovanjeData[e.target.name] = e.target.value;
                setBolovanjeData(newBolovanjeData);
      } 
    
      function handleDodavanje(e) {
        e.preventDefault();  
       
                axios.post("http://127.0.0.1:8000/api/addbolovanje",bolovanjeData,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {
               
         console.log(res.data);
               
        
      }
        )
      } 



  return (
    <div>
        <NavBar/>

      <h1 className='centriraj'>Kreiraj bolovanje</h1>
      <form onSubmit={handleDodavanje}  className="forma">
        <label>Datum od:</label>
        <input type="text" name = "datumOd" onInput={handleInput} />

         <label>Datum do:</label>
        <input type="text" name = "datumDo"  onInput={handleInput} />

        <label>Dijagnoza:</label>
        <input type="text" name = "dijagnoza" onInput={handleInput}  />

        <label>Izdao Lekar:</label>
        <input type="text" name = "izdaoLekar" onInput={handleInput}  />
        
         <label>JMBG pacijenta:</label>
        <input type="text" name = "user_id" onInput={handleInput}  />     
        
        
        <button className='dugme' type="submit">SAČUVAJ BOLOVANJE</button>
      </form>
      
    </div>
  )
}

export default AddBolovanje