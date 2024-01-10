import './Tabs.css';
import imgTab1 from '../../assets/illustration-features-tab-1.svg'

export default function TabOne(props) {


  return (
    <div className='tab1--container'>
     
      <div className='tab1--left'>
        <img src={imgTab1} alt=''/>
      </div>
      <div className='tab1--right'>
          <h3 className='tab1--title'>Bookmark in one click</h3>
          <div className='tab1--desc'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</div>
          <div>
            <button className='tab1--button'
             onClick={props.onButtonClick}>More Info</button>
          </div>
      </div>
    </div>
    )
}
