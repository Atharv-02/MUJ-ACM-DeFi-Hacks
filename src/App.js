// import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Display from './components/pages/Display';
import Petition from './components/pages/Petition';
import Browse from './components/pages/Browse';
import MyPetitions from './components/pages/MyPetitons';
import {Route, Routes} from 'react-router-dom';
import { signing_pet_operation, writing_pet_operation } from './utils/operation';
import { getAccount } from './utils/wallet';
import { useEffect, useState } from 'react';


export const onWritePetition = async (title,desc) => {
  try{
  await writing_pet_operation(title,desc);
  alert("Petition Submitted") 
}catch (err){
  alert(`Transaction Failed:  ${err.message}`);
}
};

export const onSign = async (number) => {
  try{
    await signing_pet_operation(number);
    
    alert("Signned Successfully") 
    
  }catch (err){
    if(err.message === "You need to initialize BeaconWallet by calling beaconWallet.requestPermissions first"){
      alert(`Transaction Failed:  ${err.message}`);
    }
    else{alert("Already Signed");}
    
  }
}



function App() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/display' element={<Display />} />
      <Route path='/petition' element={<Petition/>} />
      <Route path='/browse' element={<Browse/>} />
      <Route path='/mypetitions' element={<MyPetitions account={account}/>} />
      <Route path="/display/:id" element={<Display/>} />
    </Routes>
    </>
  );
}

export default App;
