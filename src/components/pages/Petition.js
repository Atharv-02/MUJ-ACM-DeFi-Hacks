import React, {useState} from 'react'
import Navbar from '../Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {onWritePetition} from '../../App'

export default function Petition() {
  const [title,setTitle] = useState("");  
  const [desc,setDesc] = useState("");  
  
  return (
    <>
        <Navbar/>
        <div className='text-black mx-[10%] mt-[50px] p-4 flex flex-col space-y-8 bg-white rounded-md' >
            <div>
                <h3 className='text-xl font-extrabold'> Title of the Petition</h3>
                <TextField onChange={(e) => {
                  setTitle(e.target.value)
                }} id="outlined-basic " label="Title" variant="outlined" className='my-3 w-[100%]'/>
            </div>
            <div>
                <h3 className='text-xl font-extrabold'> Describe your problem </h3>
                <TextField onChange={(e) => {
                  setDesc(e.target.value)
                }} id="outlined-textarea" label='Description' hiddenLabel placeholder="Description of petition" minRows={20} multiline className='my-3 w-[100%]'/>
            </div>

            <Button variant="contained" 
        
              style={{
              borderRadius: 25,
              backgroundColor: "#ECB365",
              padding: "16px 30px",
              fontSize: "23px",
              color: "#000000",
              fontWeight: "bolder",
              width:"150px",}}  
              className ='self-center' onClick={() => {onWritePetition(title,desc)}}>
            Submit</Button>    
        </div>
    </>
  )
}
