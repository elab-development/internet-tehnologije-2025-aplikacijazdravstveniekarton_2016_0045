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
       
    </div>
  )
}

export default OnePacijent
