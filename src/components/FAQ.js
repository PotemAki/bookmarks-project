import './Styles/FAQ.css';
import React, { useState } from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography, Divider} from '@mui/material';




export default function FAQ() {
  const [expanded, setExpanded] = useState(false);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const arrowStyle = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>)
  const arrowStyleActive = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="hsl(0, 94%, 66%)" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
  )

  return (
    <div className='faq--container'>
        <div className='faq--top'>
          <h3 className='faq--title'>Frequently Asked Questions</h3>
          <div className='faq--desc'>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</div>
        </div>
        <div className='faq--group'>
        <Divider />
        <Accordion expanded={expanded === 'panel1'} elevation={0} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={expanded === 'panel1' ? arrowStyleActive :arrowStyle}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='accordion--button'
            sx={{width:'500px', marginLeft:'-5px' }}
          >
            <Typography className='typography' variant="h6">What is Bookmark?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{maxWidth: '500px'}}>
            <Typography sx={{maxWidth: '500px', marginLeft:'-15px', fontFamily:'Rubik', color: 'hsl(229, 8%, 60%);'}}>
            A bookmark is a handy tool that simplifies and enhances your web browsing experience. It allows you to save and easily revisit your favorite websites or specific web pages with just a click. Instead of memorizing or typing in long URLs every time you want to return to a particular site, a bookmark acts as a shortcut.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {expanded === 'panel2' ? <Divider /> : ''}
        <Accordion expanded={expanded === 'panel2'} elevation={0} onChange={handleChange('panel2')}>

          <AccordionSummary
            expandIcon={expanded === 'panel2' ? arrowStyleActive :arrowStyle}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='accordion--button'
            sx={{width:'500px', marginLeft:'-5px' }}
          >
            <Typography className='typography' variant="h6">How can i request a new browser?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{maxWidth: '500px'}}>
            <Typography sx={{maxWidth: '500px', marginLeft:'-15px', fontFamily:'Rubik', color: 'hsl(229, 8%, 60%);'}}>
            We appreciate your interest! To suggest a new browser, contact our support team via email contact form on the bottom. We value user feedback and are always open to exploring innovative ideas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {expanded === 'panel3' ? <Divider /> : ''}
        <Accordion expanded={expanded === 'panel3'} elevation={0} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={expanded === 'panel3' ? arrowStyleActive :arrowStyle}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='accordion--button'
            sx={{width:'500px', marginLeft:'-5px' }}
          >
            <Typography className='typography' variant="h6">Is there a moblie app?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{maxWidth: '500px'}}>
            <Typography sx={{maxWidth: '500px', marginLeft:'-15px', fontFamily:'Rubik', color: 'hsl(229, 8%, 60%);'}}>
            While we're currently in the process of developing a mobile app, our bookmark tool is accessible on mobile devices through your web browser. Simply visit our webpage on your mobile device, and enjoy the same streamlined bookmarking experience. Stay tuned for updates on our upcoming mobile app release, and in the meantime, make the most of our mobile-friendly web version!
            </Typography>
          </AccordionDetails>
        </Accordion>
        {expanded === 'panel4' ? <Divider /> : ''}
        <Accordion expanded={expanded === 'panel4'} elevation={0} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={expanded === 'panel4' ? arrowStyleActive :arrowStyle}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='accordion--button'
            sx={{width:'500px', marginLeft:'-5px' }}
          >
            <Typography className='typography' variant="h6">What about other Chromium browsers?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{maxWidth: '500px'}}>
            <Typography sx={{maxWidth: '500px', marginLeft:'-15px', fontFamily:'Rubik', color: 'hsl(229, 8%, 60%);'}}>
            Our bookmark tool is designed to work seamlessly with various Chromium-based browsers. Whether you're using Chrome, Edge, or another Chromium browser, you can enjoy enhanced bookmarking features. Simply install our extension from the Chrome Web Store or your browser's extension marketplace to elevate your bookmarking experience across different Chromium platforms.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        </div>
        <button className='faq--button'>More Info</button>
    </div>
    )
}
