import React from 'react'

const OneRecept = ({recept}) => {
  return (
    <div className="oneelement">
      <div> <label className='tegettext'> LEK: </label>  <label>{recept.lekovi} </label> </div>
      <div> <label className='tegettext'> DATUM IZDAVANJA: </label>  <label>{recept.datumIzdavanja}</label> </div>
      <div> <label className='tegettext'> IZDAO LEKAR: </label>  <label>{recept.izdaoLekar}</label> </div>
<div> <label className='tegettext'> ID RECEPTA: </label>  <label>{recept.id}</label> </div>

    </div>
  )
}

export default OneRecept
