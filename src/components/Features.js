import './Styles/Features.css';
import { Box, Tab, Slide, Divider } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import TabOne from './Tabs/TabOne'
import TabTwo from './Tabs/TabTwo'
import TabThree from './Tabs/TabThree'

export default function Features() {
  const [value, setValue] = useState('1')
  const [tab, setTab] = useState('1')
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


  return (
    <div className='features--container'>
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
            <div className="box2--container">
              <svg xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="60%" height="340px" rx="160" fill="hsl(231, 69%, 60%)"/>
              </svg>
            </div>
          </Box>
            <Slide 
                in={value === '1'}
                direction="left"
                mountOnEnter
                unmountOnExit>
              <TabPanel value="1" >
                <TabOne />
              </TabPanel>
            </Slide>
            <Slide
                in={value === '2'}
                direction="left"
                mountOnEnter
                unmountOnExit>
              <TabPanel value="2">
                <TabTwo />
              </TabPanel>
            </Slide>
            <Slide
                in={value === '3'}
                direction="left"
                mountOnEnter
                unmountOnExit>
              <TabPanel value="3">
                <TabThree />
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
        <div className="bluebox--little">
        <svg width="400%" height="500" xmlns="http://www.w3.org/2000/svg">
              <rect x="-355" y="-150" width="100%" height="350px" rx="100" fill="hsl(231, 69%, 60%)"/>
        </svg>
            </div>
      </div>
    </div>
    )
}
