import React from 'react'

const OneAnaliza = (analiza) => {
  return (
    <div className="oneelement">
        
        
      <label> REZULTAT: </label>  <label>{analiza.rezultat} </label> 
      <br/>
       <label > DATUM ANALIZE: </label>  <label>{analiza.datumAnalize} </label> 
       
       <br/>
       <label > IZDAO LEKAR: </label>  <label> {analiza.izdaoLekar} </label> 
       <br/>

       
      
    </div>
  )
}

export default OneAnaliza


