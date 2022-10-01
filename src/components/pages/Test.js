import React from 'react'
import { Modal,Button,Box,Typography } from '@mui/material';
import Option from '../Option';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#041C32',
    boxShadow: 24,
    p: 4,
  };

export default function Test() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  
  return (
    <div>
        <div className='flex flex-row shadow-md space-x-12 bg-zinc-900 text-white w-[100%] h-12 justify-between px-5 items-center '>
      
      <a href="index.html" className='nav-items'>Name</a>

      <div className='flex justify-items-start space-x-10'>
        <a href="index.html" className='nav-items'>Home</a>
        <a href="petition.html" className='nav-items'>My Petitons</a>
        <a href="browse.html" className='nav-items'>Browse</a>
        <a href="about.html" className='nav-items'>About</a>
        <a href= "#" className='wallet flex items-center' onClick={handleOpen}>Connect to Wallet</a>
      </div>
    </div>
      <a className='text-white' onClick={handleOpen}>Open modal</a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='grid'>
            <div className="text-center text-white text-3xl font-bold mb-4"> Connect to Wallet</div>
            <Option text = 'MetaMask'/>
            <Option text = 'Other Wallet'/>
            <Option text = 'Other Wallet'/>


            <Button variant="contained" 
            style={{
            borderRadius: 15,
            backgroundColor: "#ECB365",
            padding: "9px 18px",
            fontSize: "15px",
            color: "#000000",
            fontWeight: "bolder",}} 
            className ='flex items-center mt-4' 
            >Create a Wallet</Button>   
          </div>
        </Box>
      </Modal>
    </div>
  )
}
