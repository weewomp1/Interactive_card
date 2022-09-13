import React from 'react'
import './App.css'
import completeIcon from './icon-complete.svg'

//completeIcon completeTitle completeDetails contButton

const detailPage = () => {
  return (
    <div className='container3'>
      <img src={completeIcon} alt="" className='completeIcon'/>
      <h2 className='completeTitle'>THANK YOU!</h2>

      <h4 className='completeDetails'>We've added your card details</h4>

      <button className='contButton'>Continue</button>
    </div>
  )
}

export default detailPage