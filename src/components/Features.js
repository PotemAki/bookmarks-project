import './Styles/Features.css';
import { Box, Tab, Slide, Divider } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState, useEffect } from 'react'
import TabOne from './Tabs/TabOne'
import TabTwo from './Tabs/TabTwo'
import TabThree from './Tabs/TabThree'
import imgTab1 from '../assets/illustration-features-tab-1.svg'
import imgTab2 from '../assets/illustration-features-tab-2.svg'
import imgTab3 from '../assets/illustration-features-tab-3.svg'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { scroller } from 'react-scroll';

export default function Features() {
  const [value, setValue] = useState('1')
  const [tab, setTab] = useState('1')
  const [open, setOpen] = useState('');

  useEffect(() => {
    // Preload images when the component mounts
    const preloadImages = [imgTab1, imgTab2, imgTab3];
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  function isActive(id) {
    if (id === value ) {
      return { color: 'black' }
    }
  }
  function isActiveTab(id) {
    if (id === tab ) {
      return { color: 'black' }
    }
  }
  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const onDownload = () => {
    setOpen('')
    scrollToSection('download')
  }
  return (
    <div className='features--container' id="features">
      <div >
        <h3 className='features--title'>Features</h3>
        <div className='features--desc'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>
      </div>
      <div className='features--widget' >
        <TabContext value={value} >
          <Box 
          position='relative'
           sx={{
            borderBottom: 1,
            borderColor: 'divider',
            maxWidth: '720px', 
            margin: '0 auto', 
          }}>
            <TabList 
            aria-label='Tabs example' 
            onChange={handleChange} 
            TabIndicatorProps={{sx: {backgroundColor: 'hsl(0, 94%, 66%)',height: 3}}}
            style={{ height: '48px' }} 
            sx={{
              '& button': {
                color: 'hsl(229, 8%, 60%)', 
                fontFamily: 'Rubik', 
                fontSize: '16px', 
                flex: '1'              
              },
              '& button:hover': {
                backgroundColor: 'white', 
                color: 'hsl(0, 94%, 66%)'
              },
            }}
            >
              <Tab sx={{textTransform :"none"}} style={isActive('1')} className='feature--tab' disableRipple label='Simple Bookmarking' value='1' />
              <Tab sx={{textTransform :"none"}} style={isActive('2')} disableRipple label='Speedy Searching' value='2' />
              <Tab  sx={{textTransform :"none"}} style={isActive('3')} disableRipple label='Easy Sharing' value='3' />
            </TabList>
          </Box>
            <Slide 
                in={value === '1'}
                direction="left"
                mountOnEnter
                unmountOnExit>
              <TabPanel value="1" >
                <TabOne onButtonClick={() => {setOpen('tab1')}}/>
              </TabPanel>
            </Slide>
            <Slide
                in={value === '2'}
                direction="left"
                mountOnEnter
                unmountOnExit>
              <TabPanel value="2">
                <TabTwo onButtonClick={() => {setOpen('tab2')}}/>
              </TabPanel>
            </Slide>
            <Slide
                in={value === '3'}
                direction="left"
                mountOnEnter
                unmountOnExit>
              <TabPanel value="3">
                <TabThree onButtonClick={() => {setOpen('tab3')}}/>
              </TabPanel>
            </Slide>
        </TabContext>
      </div>
      <div className='features--widget2'>
        <div className='features--buttons2' >
          <Divider />
          <p className='features--buttonlite' style={isActiveTab('1')} onClick={() => handleTabClick('1')}>Simple Bookmarking</p>
          {tab === '1' && <div className='active--divider'>
            <Divider sx={{backgroundColor: 'var(--redish-color)', width:'42%', height: '3px',}}/>
          </div>}
          <Divider />
          <p className='features--buttonlite'style={isActiveTab('2')} onClick={() => handleTabClick('2')}>Speedy Searching</p>
          {tab === '2' && <div className='active--divider'>
            <Divider sx={{backgroundColor: 'var(--redish-color)', width:'42%', height: '3px',}}/>
          </div>}
          <Divider />
          <p className='features--buttonlite'style={isActiveTab('3')} onClick={() => handleTabClick('3')}>Easy Sharing</p>
          {tab === '3' && <div className='active--divider'>
            <Divider sx={{backgroundColor: 'var(--redish-color)', width:'42%', height: '3px',}}/>
          </div>}
          <Divider />
        </div>
        <div className='features--inside'>
            {tab === '1' && <div>
              <TabOne />
            </div>}
            {tab === '2' && <div>
              <TabTwo />
            </div>}
            {tab === '3' && <div>
              <TabThree />
            </div>}
        </div>
      </div>
      <Dialog
        open={open === 'tab1'}
        onClose={() =>{setOpen('')}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="alert-dialog-title">
          {"Bookmark in one click"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="alert-dialog-description">
          Experience the ultimate convenience with our 'Bookmark in One Click' feature! Effortlessly organize your favorite websites using our user-friendly platform. Our simple drag-and-drop interface empowers you to tailor your bookmarked sites exactly the way you want. Whether it's arranging them by categories, priorities, or themes, you have complete control at your fingertips. Say goodbye to the hassle of complicated bookmark management and hello to seamless, personalized browsing. Enhance your online experience with the ease of a single click!
          </DialogContentText>
        </DialogContent>
        <DialogActions className="alert-dialog-actions">
          <button className='dialog--button'
          onClick={onDownload}>Download</button>
          <button className='dialog--button2'
          onClick={() =>{setOpen('')}}>Close</button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open === 'tab2'}
        onClose={() =>{setOpen('')}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="alert-dialog-title">
          {"Intelligent search"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="alert-dialog-description">
          Unleash the power of intelligent searching with our cutting-edge feature! Our robust search functionality ensures you locate saved sites in the blink of an eye—no more trawling through endless bookmarks. Effortlessly find what you need, precisely when you need it. Say goodbye to the frustration of time-consuming searches, and let our intelligent search elevate your browsing experience to new heights. Streamline your online journey with ease and efficiency!
          </DialogContentText>
        </DialogContent>
        <DialogActions className="alert-dialog-actions">
        <button className='dialog--button'
        onClick={onDownload}>Download</button>
        <button className='dialog--button2'
        onClick={() =>{setOpen('')}}>Close</button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open === 'tab3'}
        onClose={() =>{setOpen('')}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="alert-dialog-title">
          {"Share your bookmarks"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="alert-dialog-description">
          Sharing your favorite online discoveries has never been easier! With our 'Share Your Bookmarks' feature, effortlessly spread the joy of your curated collection with others. Create a shareable link at the click of a button, making it a breeze to send to friends, colleagues, or anyone eager to explore what captivates you. Whether it's a carefully crafted collection or a single bookmark, sharing is seamless and instantaneous. Enhance your online connections by effortlessly passing on the gems you've discovered. Sharing the web has never been this quick and delightful
          </DialogContentText>
        </DialogContent>
        <DialogActions className="alert-dialog-actions">
          <button className='dialog--button'
          onClick={onDownload}>Download</button>
          <button className='dialog--button2'
          onClick={() =>{setOpen('')}}>Close</button>
        </DialogActions>
      </Dialog>
    </div>
    )
}
