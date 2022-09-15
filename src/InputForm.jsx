import React from 'react'
import './InputForm.css'
import './App.css'
import NumberInput from './NumberInput.js'
import {updateCards} from './updateCards.js'
import {useForm} from 'react-hook-form'

const InputForm = ({onSubmit}) => {
  
  // function selectItems() {
   

  //   return [showCVC, showName, showMonths, showYear, cvcInput, numberInput, nameInput, monthInput, yearInput]
  // }


  function goToComplete() {
    
  }

  // cardNumber = 0913 9123 1942 2124
  // cardNumber = 0913 9123 1942 2124
  

  return (
    <div className='container'>
      <form action="" onSubmit={(event) => {
        event.preventDefault()
        onSubmit()
      }}>
        <div className="name">CARDHOLDER NAME</div>
        <input type="text" placeholder='E.G. Jane Appleseed' className='nameInput' id='nameInput' onChange={() => updateCards('Name')} maxLength="21" required/>
        <div className="number">CARD NUMBER
        <h4 className='errorWarning'>Invalid Card Number</h4>
        <NumberInput value=""/>
        
        </div>
        
        

        <div className="details">

        </div>
        <div className="wrapper">
          <input type="number" placeholder='MM' id="monthInput" onChange={() => updateCards('Months')} maxLength="2" required/>
          <input type="number" placeholder='YY' id="yearInput" onChange={() => updateCards('Years')} maxLength="4" required/>
          <input type="number" id='cvcInput'placeholder='e.g. 123' onChange={() => updateCards('CVC')} maxLength="3" required/>
        </div>
        <button type='submit' id='submit'>Confirm</button>
      </form>
    </div>
  )
}

export default InputForm