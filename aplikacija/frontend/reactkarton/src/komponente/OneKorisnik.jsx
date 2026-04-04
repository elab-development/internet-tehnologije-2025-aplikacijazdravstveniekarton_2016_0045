import React from 'react'

function OneKorisnik({korisnik}) {
  return (
    <table className='tabelakorisnik'>
      <thead>
      <tr>
        
      <th> IME: </th> 
       <th> PREZIME: </th>
       <th>ADRESA: </th> 
        <th>  DATUM ROĐENJA: </th> 
        <th>  JMBG: </th> 
        <th> ULOGA:  </th> 
        <th> EMAIL:  </th> 
        <th>  BROJ TELEFONA: </th> 
      </tr>
      </thead>
<tbody>
  <tr>
<td > {korisnik.ime} </td>
<td > {korisnik.prezime}</td>
<td > {korisnik.adresa}</td>
<td > {korisnik.datumRodjenja} </td>
<td > {korisnik.id} </td>
<td > {korisnik.uloga}</td>
<td > {korisnik.email} </td>
 <td > {korisnik.brojTelefona}</td> 
</tr>
</tbody>



    </table>
  )
}

export default OneKorisnik
