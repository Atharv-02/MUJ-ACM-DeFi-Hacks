import React, { useState } from 'react';



export default function ProgressBar({number}) {
    const [opacity,setOpacity] = React.useState({});
    let increment = 1;

    if(250*increment < number){
      while(250*increment < number){
        increment++;
      }
    }

    setTimeout(()=>{
        const newOpacity = 1
        setOpacity(opacity,newOpacity);
    },1000)

  return (
    <div className='mt-4'>
    <div className="progress" style={{
        background: '#A87F47',
        justifyContent: 'flex-start',
        borderRadius: '100px',
        alignItems: 'center',
        display: 'flex',
        height: '10px',
    }
        
    }>
        <div className="progress-value" style={{
            boxShadow: '0 10px 40px -10px #fff',
            borderRadius: '100px',
            background: '#ECB365',
            height: '30px',
            width: `${number/(250*increment)*100}%`,

        }}></div>
        
    </div>
    <div className='flex justify-between'>
    <div className='w-[200px]'>
      <span className='font-bold'>{number}</span> people have already signed
    </div>
    <div>
      <span className='font-bold'>{250*increment}</span> signatures goal
    </div>
  </div>
  </div>
  )
}

