import React from 'react'

const OneBolovanje = (bolovanje) => {
  return (
    
      <div className="oneelement">
      <div> <label> DIJAGNOZA: </label>  <label>{bolovanje.dijagnoza} </label> </div>
      <div> <label> DATUM OD: </label>  <label>{bolovanje.datumOd} </label> </div>
      <div> <label> DATUM DO: </label>  <label>{bolovanje.datumDo} </label> </div>
      <div> <label> IZDAO LEKAR: </label>  <label>{bolovanje.izdaoLekar}</label> </div>
      
    </div>
    
  )
}

export default OneBolovanje
