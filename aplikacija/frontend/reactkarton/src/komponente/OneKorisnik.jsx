import React from 'react'

function OneKorisnik({korisnik}) {
  return (
    <table className='tabelakorisnik'>
        <th>
      <th>IME: <br></br> <label className='crnitext'>{korisnik.ime} </label></th>   
       

       <th> PREZIME:<br></br><label className='crnitext'> {korisnik.prezime}</label></th> 
       
 
       <th>ADRESA:<br></br> <label className='crnitext'>{korisnik.adresa}</label></th> 
       
 
       <th> DATUM ROĐENJA: <br></br><label className='crnitext'>{korisnik.datumRodjenja} </label></th> 
        

       <th> JMBG: <br></br><label className='crnitext'>{korisnik.id} </label></th> 
        

       <th> ULOGA: <br></br><label className='crnitext'>{korisnik.uloga}</label></th>  
       

       <th>EMAIL: <br></br><label className='crnitext'>{korisnik.email} </label></th> 
        

       <th> BROJ TELEFONA:<br></br> <label className='crnitext'>{korisnik.brojTelefona} </label></th>  
      </th>
    </table>
  )
}

export default OneKorisnik
