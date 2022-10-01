import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import {onSign} from '../../App'
import Button from '@mui/material/Button';
import {BiShare} from 'react-icons/bi';
import ProgressBar from '../ProgressBar';
import { fetchStorage } from '../../utils/tzkt';

export default function Display() {
  const [petitions,setPetitions] = useState([]);

  useEffect(() => {
    
    (async () => {
      const data= await fetchStorage();
      const arr = window.location.href.split("/");
      const id  = arr[arr.length-1];
      const test = []
      Object.values(data).forEach((petition)=> {
        if(id === petition.key){
        test.push({'title': petition.title, 'content': petition.content,'signatures': petition.signature, 'number':petition.key});}
      })
      setPetitions(test)
    })();
  }, []);
  console.log(petitions);
  return (
    petitions.length!==0&&
    <>
        <Navbar/>
        <div className='text-black mx-[20%] mt-[50px] flex flex-col space-y-8 bg-white rounded-md pt-4' >  
        <div className="p-10 pt-0">
            <h3 className='text-3xl font-extrabold mb-2'> {petitions[0].title}</h3>
            <p className='mb-3'>{petitions[0].content}</p>
        
            <div className="flex justify-between mt-5 mb-4">
            <Button variant="contained" 
            
            style={{
            borderRadius: 15,
            backgroundColor: "#C84B31",
            padding: "9px 18px",
            fontSize: "15px",
            color: "#FFFFFF",
            fontWeight: "bolder",}}
            
            onClick = {()=>{
              onSign(petitions[0].number)
            }}
            >
        Sign this Petiton</Button>
        <Button variant="contained" 
            
            style={{
            borderRadius: 15,
            backgroundColor: "#ECB365",
            padding: "9px 18px",
            fontSize: "15px",
            color: "#000000",
            fontWeight: "bolder",}} 
            className ='flex items-center' 

            onClick={()=>{
              console.log(window.location.href)
              navigator.clipboard.writeText(window.location.href);
              alert("Copied Link !!");
            }}
            >
              <BiShare className='mr-2 ' />
            Share Link</Button>   
            </div>
            <ProgressBar number = {petitions[0].signatures} />
            
        </div>
        </div>
    </>
    
  )
}
