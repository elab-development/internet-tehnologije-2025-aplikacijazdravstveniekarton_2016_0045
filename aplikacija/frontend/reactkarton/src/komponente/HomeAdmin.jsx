import React from 'react'
import OneKorisnik from './OneKorisnik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  { useState ,useEffect} from 'react';

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


 const [userJMBG, setUserJMBG] = useState({
         id:"",
      });




const navigate=useNavigate();

const [korisnik , setKorisnik] = useState();

   

      
    
      function handleInputJMBG(e) {
        
        let newUserJMBG = userJMBG;
        newUserJMBG[e.target.name] = e.target.value;
                setUserJMBG(newUserJMBG);
      } 
    

      function handleInput(e) {
        
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
                setUserData(newUserData);
      }





      function handleRegister(e) {
        e.preventDefault();  
        
        
        axios.post("http://127.0.0.1:8000/api/register", userData,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
            alert("Uspesno je dodat novi korisnik!");      
        
      }
        )
          .catch( (e) =>{
           console.log(e)
           alert("Pogresan unos,pokusajte ponovo!");
})
      }










function handleUpdate(e) {
        e.preventDefault(); 
        console.log("evo");
        const{id,...restOfData}=userData;

        axios.put(`http://127.0.0.1:8000/api/userupdate/${id}`, restOfData,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
          alert("Korisnik je azuriran!");      
        
      }
        )
        .catch( (e) =>{
           console.log(e)
           alert("Pogresan unos,pokusajte ponovo!");
})
      }






 function handleDelete(e) {
        e.preventDefault();  
        
        
        axios.delete(`http://127.0.0.1:8000/api/userdelete/${userJMBG.id}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
           alert("Korisnik je obrisan!");      
        
      }
        )
        .catch( (e) =>{
           console.log(e)
           alert("Pogresan unos,pokusajte ponovo!");
})
      }







 function handlePrikazi(e) {
        
          
e.preventDefault();  
 axios.get(`http://127.0.0.1:8000/api/users/${userJMBG.id}`,{'headers' : {'Authorization':"Bearer " +  window.sessionStorage.getItem("auth_token")}}).then( (res) => {
         console.log(res.data);
        
        
              if(res.data.length === 0){
          alert("Nije pronadjen pacijent, pogresan jmbg!")
        }else {
        
              setKorisnik(res.data);
        } 
              
})
.catch( (e) =>{
           console.log(e)
           alert("Pogresan unos,pokusajte ponovo!");
})

}




                 
  function handleLogout(){
let config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/logout",
      headers: {
         Authorization: "Bearer " +  window.sessionStorage.getItem("auth_token"),
      },
    };

axios(config)
.then(function(response) {
      console.log(JSON.stringify(response.data));
      
        window.sessionStorage.removeItem("auth_token");
        
        navigate("/");
      
      })
      .catch((error) => {
        console.log(error);
      });


  }
     
      
        





  return (
    <div className='kartica'>
        <button  className='dugmeodjava' onClick={handleLogout}>odjavi se</button>
      
<br/>
<form onSubmit={handleRegister}  className="forma" >

<h1  className='centriraj'>Dodavanje novog korisnika</h1>

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

<br/>







     
<form form onSubmit={handleUpdate}  className="forma" >
<h1 className='centriraj'>Izmena podataka korisnika</h1>

        <label>JMBG:</label>
        <input type="text" name = "id" placeholder="jmbg" onInput={handleInput}  />
        <label>Ime:</label>
        <input type="text" name = "ime" placeholder="ime" onInput={handleInput} />
        <label>Prezime:</label>
        <input type="text" name = "prezime" placeholder="prezime" onInput={handleInput} />
        <label>Adresa:</label>
        <input type="text" name = "adresa" placeholder="adresa" onInput={handleInput} />
        <label>Broj telefona:</label>
        <input type="text" name = "brojTelefona" placeholder="telefon" onInput={handleInput} />
       <br/>
        <label>E mail:</label>
                <input type="text" name = "email" placeholder="email" onInput={handleInput} />
        <label>Datum rodjenja:</label>
                <input type="text" name = "datumRodjenja" placeholder="datum rodjenja" onInput={handleInput} />
       
        <label>Uloga:</label>
        <input type="text" name = "uloga" placeholder="uloga" onInput={handleInput} />
        <label>Password:</label>
        <input type="text" name = "password" placeholder="password" onInput={handleInput} />
        <br/>

<button type="submit" className='dugme' >SAČUVAJ</button>  
</form>
<br/>






      
      <form form onSubmit={handleDelete} className="forma" >
          <h1 className='centriraj'>Izbriši korisnika</h1>  
        <label>Unesi JMBG korisnika:</label>
        <input type="text" name = "id" placeholder="jmbg" onInput={handleInputJMBG}/> 
         
     <button type="submit" className='dugme'>IZBRIŠI KORISNIKA</button>  
        
      </form>  
<br/>




          
      <form form onSubmit={handlePrikazi} className="forma" >
        <h1 className='centriraj'>Pronadji korisnika</h1> 
        <label>Unesi JMBG korisnika:</label>
        <input type="text" name = "id" placeholder="jmbg" onInput={handleInputJMBG}/> 
         
     <button type="submit" className='dugme'>Pronadji KORISNIKA</button>  
        {korisnik && <OneKorisnik korisnik={korisnik} />}
      </form>






    </div>



          




  )
}

export default HomeAdmin
