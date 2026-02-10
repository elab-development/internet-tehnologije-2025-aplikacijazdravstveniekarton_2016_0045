
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

import HomeAdmin from './komponente/HomeAdmin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
<div  >

<BrowserRouter>
      <Routes>
      
        <Route
          path="/"
          element={
            <Prijava  />
          }
        />
        <Route
          path="/HomePacijent"
          element={
            <HomePacijent />
          }
        />
        <Route
          path="/HomeMedOsoblje"
          element={
            <HomeMedOsoblje/>
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
          path="/Recepti"
          element={
            <Recepti />
          }
        />
        <Route
          path="/Uputi"
          element={
            <Uputi />
          }
        />
        <Route
          path="/Analize"
          element={
            <Analize />
          }
        />
        <Route
          path="/Bolovanja"
          element={
            <Bolovanja />
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
        
       </Routes>
   </BrowserRouter>
</div>
  );
}

export default App;
