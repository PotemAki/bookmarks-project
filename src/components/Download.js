import './Styles/Download.css';
import imgChrome from '../assets/logo-chrome.svg'
import imgFirefox from '../assets/logo-firefox.svg'
import imgOpera from '../assets/logo-opera.svg'
import imgDots from '../assets/bg-dots.svg'


export default function Download() {


  return (
    <div className='download--container'>
       <div className='download--top' >
        <h3 className='download--title'>Download the extension</h3>
        <div className='download--desc'>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</div>
      </div>
      <div className='download--group'>
        <div className='download--card'>
          <img src={imgChrome} alt=''/>
          <div>
            <div className='card--title'>Add to Chrome</div>
            <div className='card--desc'>Minimum version 62</div>
          </div>
          <div className='card--bottom'>
            <img className='card--dots' src={imgDots} alt=''/>
            <button >Add & Install Extension</button>
          </div>
        </div>
        <div className='download--card2'>
          <img src={imgFirefox} alt=''/>
          <div>
            <div className='card--title'>Add to Firefox</div>
            <div className='card--desc'>Minimum version 55</div>
          </div>
          <div className='card--bottom'>
            <img className='card--dots' src={imgDots} alt=''/>
            <button >Add & Install Extension</button>
          </div>
        </div>
        <div className='download--card3'>
          <img src={imgOpera} alt=''/>
          <div>
            <div className='card--title'>Add to Opera</div>
            <div className='card--desc'>Minimum version 46</div>
          </div>
          <div className='card--bottom'>
            <img className='card--dots' src={imgDots} alt=''/>
            <button >Add & Install Extension</button>
          </div>
        </div>
      </div>
    </div>
    )
}
