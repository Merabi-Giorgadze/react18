import React, { useId } from 'react'

const Form:React.FC = () => {
 const id = useId()
  return (
   <>
    <div>
     <label htmlFor={id}>Write email adres</label>
     <input type="email" id={id}/>
    </div>
   </>
  )
}

export default Form