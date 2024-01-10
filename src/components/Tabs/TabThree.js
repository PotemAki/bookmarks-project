import './Tabs.css';
import imgTab3 from '../../assets/illustration-features-tab-3.svg'

export default function TabOne(props) {


  return (
    <div className='tab1--container'>
      <div className='tab3--left'>
        <img src={imgTab3} alt=''/>
      </div>
      <div className='tab2--right'>
          <h3 className='tab1--title'>Share your bookmarks</h3>
          <div className='tab1--desc'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</div>
          <div>
            <button className='tab1--button'
            onClick={props.onButtonClick}>More Info</button>
          </div>
      </div>
    </div>
    )
}
