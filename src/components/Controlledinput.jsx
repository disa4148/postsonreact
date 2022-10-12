import React, {useState} from 'react'

export const Controlledinput = () => {

  const [value, setValue] = useState('')

  return (
    <div>
        <h1>{value}</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/> {/*При изменении вызов стрелочной ф-ции*/}
    </div>
  )
}

export default Controlledinput