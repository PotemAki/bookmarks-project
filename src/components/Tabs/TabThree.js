import './Tabs.css';
import imgTab1 from '../../assets/illustration-features-tab-3.svg'

export default function TabOne() {


  return (
    <div className='tab1--container'>
      <div className='tab3--left'>
        <img src={imgTab1} alt=''/>
      </div>
      <div className='tab2--right'>
          <h3 className='tab1--title'>Share your bookmarks</h3>
          <div className='tab1--desc'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</div>
          <div>
            <button className='tab1--button'>More Info</button>
          </div>
      </div>
    </div>
    )
}
