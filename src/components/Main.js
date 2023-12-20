import './Styles/Main.css';
import imgHero from '../assets/illustration-hero.svg'


export default function Main() {


  return (
    <div className='main--container'>
      <div className='main--left'>
        <h2 className='left--title'>A Simple Bookmark Manager</h2>
        <div className='left--desc'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</div>
        <div>
          <button className='left--button1'>Get it on Chrome</button>
          <button className='left--button2'>Get it on Firefox</button>
        </div>
      </div>
      <div className='main--right'>
        <img src={imgHero} alt=''/>
        <svg className="main--big" width="400%" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect x="195" y="15" width="60%" height="340px" rx="160" fill="hsl(231, 69%, 60%)"/>
        </svg>
        <svg className="main--lite" width="400%" height="600" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="165" width="50%" height="180px" rx="90" fill="hsl(231, 69%, 60%)"/>
        </svg>
      </div>
    </div>
    )
}
