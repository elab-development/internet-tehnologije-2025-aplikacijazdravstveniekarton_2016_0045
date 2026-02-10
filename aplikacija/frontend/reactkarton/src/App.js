import logo from './logo.svg';
import './App.css';
import Analize from './komponente/Analize';
import AddAnalize from './komponente/AddAnalize';
import Prijava from './komponente/Prijava';
import HomePacijent from './komponente/HomePacijent';
import HomeMedOsoblje from './komponente/HomeMedOsoblje';
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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import HomeAdmin from './komponente/HomeAdmin';


function App() {
  return (
    
<div  >

<HomeAdmin/>
</div>
  );
}

export default App;
