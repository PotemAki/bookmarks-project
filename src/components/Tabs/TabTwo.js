import './Tabs.css';
import imgTab1 from '../../assets/illustration-features-tab-2.svg'

export default function TabOne() {


  return (
    <div className='tab1--container'>
      <div className='tab2--left'>
        <img src={imgTab1} alt=''/>

      </div>
      <div className='tab2--right'>
          <h3 className='tab1--title'>Intelligent search</h3>
          <div className='tab1--desc'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</div>
          <div>
            <button className='tab1--button'>More Info</button>
          </div>
      </div>
    </div>
    )
}
