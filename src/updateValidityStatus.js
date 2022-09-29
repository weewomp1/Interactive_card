import isValid from './isValid.js'

function updateValidityStatus() {
  const numberInput = document.querySelector('#numberInput')
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

export default updateValidityStatus;