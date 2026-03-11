import React from 'react'

const OneUput = ({uput}) => {
  return (
    <div className="oneelement">
      <div> <label className='tegettext'> UPUT ZA: </label>  <label>{uput.uputZa}</label> </div>
      <div> <label className='tegettext'> DATUM UPUTA: </label>  <label> {uput.datumUputa}</label> </div>
      <div> <label className='tegettext'> IZDAO LEKAR: </label>  <label> {uput.izdaoLekar}</label> </div>
      
    </div>
  )
}

export default OneUput
