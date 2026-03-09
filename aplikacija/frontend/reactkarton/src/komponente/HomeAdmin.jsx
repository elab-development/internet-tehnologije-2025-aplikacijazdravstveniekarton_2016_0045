import React from 'react'
import OnePacijent from './OnePacijent'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';

function HomeAdmin() {

const [userData, setUserData] = useState({
        ime:"",
        email: "",
        password: "",
        id:"",
        prezime: "",
        adresa: "",
        brojTelefona:"",
        datumRodjenja:"",
        uloga: ""
      });

      
    
      function handleInput(e) {
        
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
                setUserData(newUserData);
      } 

      function handleRegister(e) {
        e.preventDefault();  
        axios.post("http://127.0.0.1:8000/api/register", userData).then( (res) => {
         console.log(res.data);
               
        
      }
        )
        .catch( (e) =>
           console.log(e));
      }





  return (
    <div className='kartica'>
        <button className='dugme'> Odjavi se</button>
      <h1 className='centriraj'>Dodavanje novog pacijenta</h1>

<form onSubmit={handleRegister}  >



        <label>Ime:</label>
        <input type="text" name = "ime" placeholder="ime" onInput={handleInput} />
        <label>Prezime:</label>
        <input type="text" name = "prezime" placeholder="prezime" onInput={handleInput} />
        <label>Adresa:</label>
        <input type="text" name = "adresa" placeholder="adresa" onInput={handleInput} />
        <label>Broj telefona:</label>
        <input type="text" name = "brojTelefona"placeholder="broj telefona" onInput={handleInput}  />
       <br/>
        <label>E mail:</label>
                <input type="text" name = "email" placeholder="email" onInput={handleInput} />
        
        <label>JMBG:</label>
        <input type="text" name = "id" placeholder="jmbg" onInput={handleInput}  />
        <label>Uloga:</label>
        <input type="text" name = "uloga" placeholder="uloga" onInput={handleInput} />
         <label>Datum Rodjenja:</label>
        <input type="text" name = "datumRodjenja" placeholder="datum rodjenja" onInput={handleInput} />
        <label>Password:</label>
        <input type="text" name = "password" placeholder="password" onInput={handleInput} />
        <br/>

<button type="submit" className='dugme'>SAČUVAJ</button>
</form>



****************************************************************************************************************************************************************************************************************************
      <h1 className='centriraj'>Izmena podataka korisnika</h1>
      <form action= "submit" >
        <label>Unesi JMBG korisnika:</label>
        <input type="text" name = "Unesi JMBG korisnika:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form>  
      <OnePacijent/>
<form>



        <label>Ime:</label>
        <input type="text" name = "Ime" />
        <label>Prezime:</label>
        <input type="text" name = "Prezime" />
        <label>Adresa:</label>
        <input type="text" name = "Adresa" />
        <label>Broj telefona:</label>
        <input type="text" name = "Broj telefona" />
       <br/>
        <label>E mail:</label>
                <input type="text" name = "Email" />
        
        <label>Broj telefona:</label>
        <input type="text" name = "Broj telefona" />
        <label>Uloga:</label>
        <input type="text" name = "Uloga" />
        <label>Password:</label>
        <input type="text" name = "Password" />
        <br/>


</form>
<button type="submit" >SAČUVAJ</button>  


****************************************************************************************************************************************************************************************************************************
         <h1 className='centriraj'>Izbriši korisnika</h1>  
      <form action= "submit" >
        <label>Unesi JMBG korisnika:</label>
        <input type="text" name = "Unesi JMBG korisnika:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form>  
<OnePacijent/>
<button type="submit" >IZBRIŠI KORISNIKA</button>  


    </div>
  )
}

export default HomeAdmin
