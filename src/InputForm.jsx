import React from 'react'
import './InputForm.css'
import './App.css'

const InputForm = ({onSubmit}) => {
  
  // function selectItems() {
   

  //   return [showCVC, showName, showMonths, showYear, cvcInput, numberInput, nameInput, monthInput, yearInput]
  // }


  function goToComplete() {
    
  }

  // cardNumber = 0913 9123 1942 2124
  // cardNumber = 0913 9123 1942 2124
  function isValid(cardNumber) {
    let newStr = cardNumber.split('').filter(char => char != " ").filter(char => char != "-");
    let newArr = []
    let oddSum = 0;
    let evenSum = 0;
    
    for(let i = newStr.length-1; i >= 0; i-=2) {
      newArr.push(newStr[i])
      oddSum += parseInt(newStr[i], 10)
      
    }
    for(let i = newStr.length-2; i >= 0; i-=2) {
      let newVar = parseInt(newStr[i], 10) * 2;
          if (newVar === 10) {
        newVar = 1;
      } else{ 
        if(newVar >= 10) {
          newVar = newVar.toString().split("")
          let subVar = parseInt(newVar[1], 10);
          newVar = parseInt(newVar[0], 10) + subVar;
        } else {
          
        }
      }
      evenSum += newVar 
    }
    
    return ((oddSum + evenSum) % 10 === 0)
  }

  function updateValidityStatus() {
    const numberInput = document.querySelector('#numberInput')
    console.log('function called')
    if (isValid(numberInput.value)) {
      numberInput.classList.remove('error')
      document.querySelector('.errorWarning').setAttribute('style', 'color: green; font-weight: 500;');

      document.querySelector('.errorWarning').innerText= '√'
    } else {
      numberInput.classList.add('error')
      document.querySelector('.errorWarning').setAttribute('style', 'color: red')
      document.querySelector('.errorWarning').innerText= 'Invalid Card Number'
    }
  }

  function updateCards(inputName){
    const showCVC = document.querySelector('#showCVC')
    const showNumber = document.querySelector('#showNumber')
    const showName = document.querySelector('#showName')
    const showMonths = document.querySelector('#showMonths')
    const showYear = document.querySelector('#showYear')
    const cvcInput = document.querySelector('#cvcInput')
    const numberInput = document.querySelector('#numberInput')
    const nameInput = document.querySelector('#nameInput')
    const monthInput = document.querySelector('#monthInput')
    const yearInput = document.querySelector('#yearInput')


    switch(inputName) {
      case 'Name':
        showName.innerText = nameInput.value;
        break;
      case 'Number':
        showNumber.innerText = numberInput.value;
        updateValidityStatus()
        break;
      case 'CVC':
        showCVC.innerText = cvcInput.value;
        break;
      case 'Months':
        showMonths.innerText = monthInput.value;
        break;
      case 'Years':
        showYear.innerText = yearInput.value;
        break;
    }

  }

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
        <input name="number" type="number" placeholder='e.g. 1234 5678 9123 0000' className='numberInput' id='numberInput' onChange={() => {updateCards('Number');}} required/>
        
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