import React from 'react'

const OnePregled = (pregled) => {
  return (
    <div>
      <div className="oneelement">
      <div> <label> ANAMNEZA: </label>  <label>{pregled.anamneza}</label> </div>
      <div> <label> DIJAGNOZA: </label>  <label>{pregled.dijagnoza}</label> </div>
      <div> <label> DATUM PREGLEDA: </label>  <label>{pregled.datumPregleda}</label> </div>
      <div> <label> PREGLEDAO LEKAR: </label>  <label> {pregled.pregledaoLekar}</label> </div>
      
    </div>
    </div>
  )
}

export default OnePregled
