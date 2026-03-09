import React from 'react'

const OneRecept = (recept) => {
  return (
    <div className="oneelement">
      <div> <label> LEK: </label>  <label>{recept.lek} </label> </div>
      <div> <label> DATUM IZDAVANJA: </label>  <label>{recept.datumIzdavanja}</label> </div>
      <div> <label> IZDAO LEKAR: </label>  <label>{recept.izdaoLekar}</label> </div>

    </div>
  )
}

export default OneRecept
