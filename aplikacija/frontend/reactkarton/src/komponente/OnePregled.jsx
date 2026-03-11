import React from 'react'

const OnePregled = ({pregled}) => {
  return (
    <div>
      <div className="oneelement">
      <div> <label className='tegettext'> ANAMNEZA: </label>  <label>{pregled.anamneza}</label> </div>
      <div> <label className='tegettext'> DIJAGNOZA: </label>  <label>{pregled.dijagnoza}</label> </div>
      <div> <label className='tegettext'> DATUM PREGLEDA: </label>  <label>{pregled.datumPregleda}</label> </div>
      <div> <label className='tegettext'> PREGLEDAO LEKAR: </label>  <label> {pregled.pregledaoLekar}</label> </div>
      <div> <label className='tegettext'> PREGLED ID: </label>  <label> {pregled.id}</label> </div>
    </div>
    </div>
  )
}

export default OnePregled
