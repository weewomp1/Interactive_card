import updateValidityStatus from './updateValidityStatus'

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

export {updateCards}