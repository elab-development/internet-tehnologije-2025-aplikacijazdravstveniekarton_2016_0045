import React from 'react'

const OneAnaliza = ({analiza}) => {
  return (
    <div className="oneelement">
        
        
      <label className='tegettext'> REZULTAT: </label>  <label>{analiza.rezultat} </label> 
      <br/>
       <label className='tegettext'> DATUM ANALIZE: </label>  <label>{analiza.datumAnalize} </label> 
       
       <br/>
       <label className='tegettext'> IZDAO LEKAR: </label>  <label> {analiza.izdaoLekar} </label> 
       <br/>
        <label className='tegettext'> ID analize: </label>  <label> {analiza.id} </label> 
       <br/>

       
      
    </div>
  )
}

export default OneAnaliza


