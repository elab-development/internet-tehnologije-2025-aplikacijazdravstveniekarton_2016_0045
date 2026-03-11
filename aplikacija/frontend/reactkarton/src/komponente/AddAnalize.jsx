import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5"
import NavBar from './NavBar'
import  { useState } from 'react';
import axios from 'axios';


function AddAnalize() {

const [analizaData, setAnalizaData] = useState({
        rezultat:"",
        datumAnalize: "",
        izdaoLekar:"",
        user_id: "",
        
      });

      function handleInput(e) {
        
        let newAnalizaData = analizaData;
        newAnalizaData[e.target.name] = e.target.value;
                setAnalizaData(newAnalizaData);
      } 
    
      function handleDodavanje(e) {
        e.preventDefault();  
       
                axios.post("http://127.0.0.1:8000/api/addanaliza",analizaData,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {
               
         console.log(res.data);
               
        
      }
        )
      } 



  return (
    <div>
      <NavBar/>

      <h1 className='centriraj'>Kreiraj analizu</h1>
      <form onSubmit={handleDodavanje}  className="forma">
        <label>Rezultat:</label>
      <input type="text" name = "rezultat" onInput={handleInput} />

        <label>Izdao Lekar:</label>
        <input type="text" name = "izdaoLekar" onInput={handleInput} />
        
        <label>Datum analize:</label>
        <input type="text" name = "datumAnalize" onInput={handleInput} 
                   />
        
         <label>JMBG pacijenta:</label>
        <input type="text" name = "user_id" onInput={handleInput} 
                   />
        
        <button className='dugme' type="submit">SAČUVAJ ANALIZU</button>
      </form>
      
    </div>
  )
}

export default AddAnalize
