import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar';

function ReadMore({title,content,signature,number,link ='#'}){
  
  const newText = content.slice(0,200);
  if(content.length >= 200){
  return(
    <p>
    {newText}
    <Link to= {{
      pathname: link,
      state: { title: title, content: content ,signature: signature, number: number} 
    }} className ='text-red-500 hover:text-red-900'>...Read More</Link>
    </p>
  )}
  else{
    return(
      <p>
        {newText}
      </p>
    )
  }
}

export default function CardP({id,title,content,signature,number}) {

  let navigate = useNavigate();
  const routeChange = () =>{ 
    navigate(`/display/${number}`,{ state: { title: title, content: content ,signature: signature, number: number} });
  }


  return (
    <div className='w-[45%] bg-white rounded-md  my-4' id={id} onClick ={() => {
      routeChange();
    }}> 
    <div className='flex-col p-3'>
      <h3 className='text-3xl font-extrabold mb-2'> {title}</h3>
      <ReadMore content ={content} link='/display' title = {title} signature = {signature} number ={number}/>
      <ProgressBar number= {signature}/>
    </div>
    </div>
  )
}
