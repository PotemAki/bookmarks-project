import './Styles/Modal.css';
import { Backdrop, Box, Modal, Fade } from '@mui/material';
import { useState, useEffect} from 'react'
import TabTwo from '../components/Tabs/TabTwo'
import close from '../assets/icon-close-dark.svg'


export default function TransitionsModal(prop) {
  const [open, setOpen] = useState(prop.isOpen);
  const handleClose = () => {
    setOpen(false);
    prop.onClose();
  };

  useEffect(() => {
    setOpen(prop.isOpen);
  }, [prop.isOpen]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="box--container">
            <div className='modal--container'>
                <img className='modal--button' src={close} alt='' onClick={handleClose}/>
                <div className='blueBox--modal'></div>
              <TabTwo />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}