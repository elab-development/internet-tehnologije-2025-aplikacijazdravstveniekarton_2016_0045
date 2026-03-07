import React from 'react'

const OneUput = (uput) => {
  return (
    <div className="oneelement">
      <div> <label> UPUT ZA: </label>  <label>{uput.uputZa}</label> </div>
      <div> <label> DATUM UPUTA: </label>  <label> {uput.datumUputa}</label> </div>
      <div> <label> IZDAO LEKAR: </label>  <label> {uput.izdaoLekar}</label> </div>
      
    </div>
  )
}

export default OneUput
