import React from 'react'

function OnePacijent(pacijent) {
  return (
    <div className='oneelement'>
      <label> IME: </label>  <label>{pacijent.ime} </label> 
      <br/>
       <label> PREZIME: </label>  <label> {pacijent.prezime}</label> 
       <br/>
       <label> ADRESA: </label>  <label> {pacijent.adresa}</label> 
       <br/>
       <label> DATUM ROĐENJA: </label>  <label>{pacijent.datumRodjenja} </label> 
       <br/>
       <label> JMBG: </label>  <label>{pacijent.id} </label> 
       <br/>
       <label> ULOGA: </label>  <label>{pacijent.uloga} </label> 
       <br/>
       <label>EMAIL: </label>  <label>{pacijent.email} </label> 
       <br/>
       <label> BROJ TELEFONA: </label>  <label>{pacijent.brojTelefona} </label> 
      
    </div>
  )
}

export default OnePacijent
