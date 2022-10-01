import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';
import { getAccount,connectWallet } from '../../utils/wallet';
import './Home.css';

export default function Home() {
  const [account, setAccount] = useState("");
  
  const checkWallet  = async () => {
    await connectWallet();
    const account = await getAccount();
    
    setAccount(account);
  };

  useEffect(() => {
    (async () => {
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = '\petition'; 
    navigate(path);
  }

  return (
    <>
    <Navbar/>
  
    <div className="theme item-container">
      <img src="images/decoration.png" alt="decoration" className='decoration' />
      <div className="items">
        <p class="text-container text-white font-bold"><span class="you-text">You</span> <span class="can-text">Can</span><br/> <span class="change-text">Change</span><br/>The World.</p>
        <Button className='button-css' variant="contained" 
        
        style={{
        borderRadius: 24,
        backgroundColor: "#ECB365",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#000000",
        fontWeight: "bolder",}} 

        onClick = {()=> {
          if(account === ""){
            checkWallet();
          }
          else{
            routeChange();
          }
        }}
        >
      <span className="write-petiiton">Write a Petiton</span></Button>
      </div>    
      </div>

    
    <div class="about-us">
      
      <div class="about-us-content">
        <div class = "about-us-maincontent">
        <img src="images/deco.jpg" alt="" />
        <div className='content'>
        <h3>
          About Us
        </h3>
        <p> The decentralised petition system takes the power of the internet and blockchain to provide users with a platform to voice their opinions and support others doing the same.
        <br /><br />
        Users come first. Our principles align with those of free speech. We wanted a platform where everyone no matter their race, gender, or nationality could change the way society works. This is how the Decentralised Petition was born.
        </p>
        </div>

        </div>
      </div>
    </div>
    <div className="features">
      <div className='features content'>
        <h3>
          Why Use Us?
        </h3>
        <div className="feature-content">
        <div className="feature-container-under">
        <div className="feature-container">
          <div class ="number">01</div>
          <p>  Anyone will be able to anonymously sign a petition since the data of users are securely stored on the blockchain.
          </p>
        </div>
        <div className="feature-container">
          <div class ="number">02</div>
          <p>The petition cannot be edited/deleted/removed at any cost since the petition is on the blockchain.
          </p>
        </div>
        </div>
        </div>
        <div className="feature-container-under">
        <div className="feature-container">
          <div class ="number">03</div>
          <p>There is no involvement of bots since signing/writing a petition requires a minimum gas fee.
          </p>
        </div>
        <div className="feature-container">
          <div class ="number">04</div>
          <p>Anyone can write/sign the petition.
          </p>
        </div>
        </div>
        
        </div>
      </div>
    </>
  )
}