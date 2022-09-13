import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm.jsx'
import ColorSection from './ColorSection.jsx'
import bgCardBack from './bg-card-back.png'
import bgCardFront from './bg-card-front.png'
import bgMainMobile from './bg-main-mobile.png'
import cardLogo from './card-logo.svg'
import DetailPage from './detailPage';
import {useState} from 'react'

function App() {
  const [hasSubmitted, setHasSubmit] = useState(false)
  const onSubmit = () => {
    setHasSubmit(true)
  }


  return (
    <div className="App">
      <div className="container" style={{height: '100vh'}}>

        <div className="cards">
          <div className='bgBack'>
            <div className="cvcnumber" id='showCVC'>
              000
            </div>
          </div>
          <div className='bgFront'>
            <div className="section0">
              <img src={cardLogo}/>
            </div>
            <div className="section1" id='showNumber'>
            0000 0000 0000 0000
            </div>
            <div className="section2">
              <div className="name0" id="showName">
              JANE APPLESEED
              </div>
              <div className="date0" id="showDate">
                <div className="months" id='showMonths'>00</div>
                /
                <div className="year" id='showYear'>2000</div>
              </div>
            </div>
          </div>
        </div>
        <ColorSection />

        {(!hasSubmitted) ? (<InputForm onSubmit={onSubmit}/>) : (<DetailPage />)}
      </div>
    </div>
  );
}

export default App;
