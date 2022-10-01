import { Button } from '@mui/material'
import React from 'react'

export default function Option({text}) {
  return (
    <Button variant="contained" 
            
            style={{
            borderRadius: 15,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: "9px 18px",
            fontSize: "15px",
            color: "#FFFFFF",
            fontWeight: "bolder",
            width: '100%'}} 
            className ='flex items-center mt-2' 
            >{text}</Button> 
  )
}
