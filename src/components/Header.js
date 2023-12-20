import './Styles/Header.css';
import { Drawer, Box, Typography, IconButton, Divider} from '@mui/material';
import { useState, useEffect } from 'react'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import logo from '../assets/logo-bookmark.svg'
import logoWhite from '../assets/logo-bookmark-white2.svg'
import TransitionsModal  from './Modal';

export default function Header() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [wasUsed, setWasUsed] = useState(false)

  function handleMouse() {
    if (wasUsed) {
        //this prevent modal to pop up everytime mouse enter header. I realize this wouldn't allow You to check buttons on header but if this was goal of exercise, then this is the option to be removed.
      return
    }
    setIsModalOpen(true)
    setWasUsed(true)
  }

  function updateModalOpenState(isOpen) {
    if (isDrawerOpen) {
      return
    }
    setIsModalOpen(isOpen);
  }

  useEffect(() => {
    setTimeout(()=>{
      setIsModalOpen(true)
    }, 30000);
  }, [])
  
  return (
    <div >
        <TransitionsModal 
        isOpen = {isModalOpen} 
        onClose={() => updateModalOpenState(false)}
        />
      <div className='header' onMouseEnter={handleMouse}>
      {!isDrawerOpen && <img src={logo} alt='logo'/>}
        <div className='header--buttons'>
          <button className='button--header1'>FEATURES</button>
          <button className='button--header1'>PRICING</button>
          <button className='button--header1'>CONTACT</button>
          <button className='button--header2'>LOGIN</button>
        </div>
        {isDrawerOpen && <div className='hamburger'></div>}
        {!isDrawerOpen && <div className='hamburger'> 
          <IconButton 
            size='large' 
            edge='start' 
            color='inherit' 
            onClick={() => setIsDrawerOpen(true)}>
              <img src={hamburger} alt=''></img>
          </IconButton>
        </div>}
      </div>
      <div className='side--nav'>
        <Drawer 
          PaperProps={{
            sx: { 
              width: "100%",
              backgroundColor: 'hsl(229, 31%, 21%)',
              opacity: '0.8'
            },
          }}
          anchor='left'
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}>
          <Box p={2} width='90%' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
            <div className='drawer--header'>
              <img src={logoWhite} alt='logo'/>
              <IconButton 
                size='large' 
                edge='start' 
                color='inherit' 
                onClick={() => setIsDrawerOpen(false)}>
                  <img src={close} alt=''></img>
              </IconButton>
            </div>
            <div className='drawer--body'>
              <Divider sx={{ bgcolor: "hsl(229, 8%, 60%)", opacity:'0.4'}}/>
              <div className='drawer--button1'>FEATURES</div>
              <Divider sx={{ bgcolor: "hsl(229, 8%, 60%)", opacity:'0.4'}}/>
              <div className='drawer--button1'>PRICING</div>
              <Divider sx={{ bgcolor: "hsl(229, 8%, 60%)", opacity:'0.4'}}/>
              <div className='drawer--button1'>CONTACT</div>
              <Divider sx={{ bgcolor: "hsl(229, 8%, 60%)", opacity:'0.4'}}/>
              <button className='drawer--button2'>LOGIN</button>
            </div>
            <div className='drawer--bottom'>
              <div className='drawer--media'>
                <svg className="social--svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fillRule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                <svg className="social--svg" xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fillRule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/></svg>
              </div>
            </div>
            </Typography>
          </Box>
        </Drawer>
      </div>
    </div>
    )
}
