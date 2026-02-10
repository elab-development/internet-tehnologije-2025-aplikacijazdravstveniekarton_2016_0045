import React from 'react'
import OnePacijent from './OnePacijent'

function HomeAdmin() {
  return (
    <div className='kartica'>
        <button className='dugme'> Odjavi se</button>
      <h1 className='centriraj'>Dodavanje novog pacijenta</h1>

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
