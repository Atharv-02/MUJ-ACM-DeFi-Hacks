import React from 'react'
import { Modal,Box, Button } from '@mui/material';
import Option from './Option';

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

export default function ModalForWallet({openStatus,closeStatus}) {
    
  return (
    
    <Modal
        open={openStatus}
        onClose={closeStatus}
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
  )
}
