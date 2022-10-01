import React, { useState,useEffect } from 'react';
import {BsWallet} from 'react-icons/bs';
import { Link} from 'react-router-dom';  
import {getAccount, connectWallet} from '../utils/wallet'; 
import './Navbar.css';


export default function Navbar() {

  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  return (
    <>
    <div className='nav-bar'>
      
      <Link to="/" className='nav-items'>The Decentralised Petition App</Link>

      <div className='flex justify-items-start space-x-10'>
        <Link to="/" className='nav-items'>Home</Link>
        <Link to="/mypetitions" className='nav-items'>My Petitons</Link>
        <Link to="/browse" className='nav-items'>Browse</Link>
        <Link to="#" className='wallet flex items-center' onClick={onConnectWallet}><BsWallet className='mr-2'/>{account !=="" ? account:"Connect to Wallet"}</Link>
      </div>
    </div> 
    </>
  )
}

