import React from 'react'
import NavBar from './NavBar'
import  { useState } from 'react';
import axios from 'axios';


function AddUput() {
const [uputData, setUputData] = useState({
        
        uputZa: "",
        datumUputa: "",
        izdaoLekar:"",
        user_id: "",
        
      });

      function handleInput(e) {
        
        let newUputData = uputData;
        newUputData[e.target.name] = e.target.value;
                setUputData(newUputData);
      } 
    
      function handleDodavanje(e) {
        e.preventDefault();  
       
                axios.post("http://127.0.0.1:8000/api/adduput",uputData,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then((res)=> {
               
         console.log(res.data);
               
        
      }
        )
      } 

  return (
    <div>
        <NavBar/>

      <h1 className='centriraj'  >Kreiraj uput</h1>
      <form action= "submit" className="forma" onSubmit={handleDodavanje}>
        <label>Uput za:</label>
        <input type="text" name = "uputZa" onInput={handleInput} />

         <label>Datum uputa:</label>
        <input type="text" name = "datumUputa" onInput={handleInput} />

        
        <label>Izdao Lekar:</label>
        <input type="text" name = "izdaoLekar" onInput={handleInput} />
        
          <label>JMBG pacijenta:</label>
        <input type="text" name = "user_id" onInput={handleInput} />    
        
        <button className='dugme' type="submit">SAČUVAJ UPUT</button>
        
      </form>
      
    </div>
  )
}

export default AddUput