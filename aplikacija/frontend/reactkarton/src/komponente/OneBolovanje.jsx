import React from 'react'

const OneBolovanje = ({bolovanje}) => {
  return (
    
      <div className="oneelement">
      <div> <label className='tegettext'> DIJAGNOZA: </label>  <label>{bolovanje.dijagnoza} </label> </div>
      <div> <label className='tegettext'> DATUM OD: </label>  <label>{bolovanje.datumOd} </label> </div>
      <div> <label className='tegettext'> DATUM DO: </label>  <label>{bolovanje.datumDo} </label> </div>
      <div> <label className='tegettext'> IZDAO LEKAR: </label>  <label>{bolovanje.izdaoLekar}</label> </div>
     <div><label className='tegettext'> ID ANALIZE: </label>  <label> {bolovanje.id} </label> </div> 
       
    </div>
    
  )
}

export default OneBolovanje
