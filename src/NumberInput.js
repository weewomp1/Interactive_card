import React from 'react'
import updateCards from './InputForm'

const NumberInput = ({value, maxLength}) => {
  return (
    <input name="number" type="number" placeholder='e.g. 1234 5678 9123 0000' className='numberInput' id='numberInput' onChange={() => {
      updateCards('Number');

      if (value.length > maxLength) {
        value = value.slice(0, maxLength)
      }
    }} required/>
  )
}

export default NumberInput