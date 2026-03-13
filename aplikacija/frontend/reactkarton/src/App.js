
import './App.css';
import Analize from './komponente/Analize';
import AddAnalize from './komponente/AddAnalize';
import Prijava from './komponente/Prijava';

import OneAnaliza from './komponente/OneAnaliza';
import OneBolovanje from './komponente/OneBolovanje';
import OneUput from './komponente/OneUput';
import OneRecept from './komponente/OneRecept';
import Bolovanja from './komponente/Bolovanja';
import Uputi from './komponente/Uputi';
import Recepti from './komponente/Recepti';
import Pregledi from './komponente/Pregledi';
import AddBolovanje from './komponente/AddBolovanje';
import AddRecept from './komponente/AddRecept';
import AddPregled from './komponente/AddPregled';
import AddUput from './komponente/AddUput';
import NavBar from './komponente/NavBar';
import Home from './komponente/Home';
import BolovanjaPacijent from './komponente/BolovanjaPacijent';
import AnalizePacijent from './komponente/AnalizePacijent';
import ReceptiPacijent from './komponente/ReceptiPacijent';
import UputiPacijent from './komponente/UputiPacijent';
import PreglediPacijent from './komponente/PreglediPacijent';

import HomeAdmin from './komponente/HomeAdmin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import BolovanjaSestre from './komponente/BolovanjaSestre';
import AnalizeSestre from './komponente/AnalizeSestre';
import PreglediSestre from './komponente/PreglediSestre';
import ReceptiSestre from './komponente/ReceptiSestre';
import UputiSestre from './komponente/UputiSestre';



function App() {
  const [ token , setToken] = useState();

  
function addToken(auth_token){
    setToken(auth_token);
  } 
  


  return (
   
<div  >

<BrowserRouter>
      <Routes>
      
        <Route
          path="/"
          element={
            <Prijava addToken={addToken} />
          }
        />
        
        
         <Route
          path="/Home"
          element={
            <Home />
          }
        />
        <Route
          path="/HomeAdmin"
          element={
            <HomeAdmin />
          }
        />
        <Route
          path="/Pregledi"
          element={
            <Pregledi />
          }
        />
        <Route
          path="/PreglediPacijent"
          element={
            <PreglediPacijent />
          }
        />
        <Route
          path="/Recepti"
          element={
            <Recepti />
          }
        />
        <Route
          path="/ReceptiPacijent"
          element={
            <ReceptiPacijent />
          }
        />
        <Route
          path="/Uputi"
          element={
            <Uputi />
          }
        />
        <Route
          path="/UputiPacijent"
          element={
            <UputiPacijent />
          }
        />
        <Route
          path="/Analize"
          element={
            <Analize />
          }
        />
         <Route
          path="/AnalizePacijent"
          element={
            <AnalizePacijent />
          }
        />
        <Route
          path="/Bolovanja"
          element={
            <Bolovanja />
          }
        />
        <Route
          path="/BolovanjaPacijent"
          element={
            <BolovanjaPacijent />
          }
        />
        <Route
          path="/AddAnalize"
          element={
            <AddAnalize />
          }
        />
        <Route
          path="/AddPregled"
          element={
            <AddPregled />
          }
        />
        <Route
          path="/AddUput"
          element={
            <AddUput />
          }
        />
        <Route
          path="/AddRecept"
          element={
            <AddRecept />
          }
        />
        <Route
          path="/AddBolovanje"
          element={
            <AddBolovanje />
          }
        />
        <Route
          path="/AnalizeSestre"
          element={
            <AnalizeSestre />
          }
        />
        <Route
          path="/BolovanjaSestre"
          element={
            <BolovanjaSestre />
          }
        />
        <Route
          path="/PreglediSestre"
          element={
            <PreglediSestre />
          }
        />
        <Route
          path="/ReceptiSestre"
          element={
            <ReceptiSestre />
          }
        />
        <Route
          path="/UputiSestre"
          element={
            <UputiSestre />
          }
        />
       </Routes>
   </BrowserRouter>
</div>
  );
}

export default App;
