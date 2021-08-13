import React, { useEffect, Fragment } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './App.css'

import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
const App = () => {
  useEffect(() => {
    // Initialize Materialize JS so we can use modals
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar/> 
      <div className="container">
        <AddBtn/>
        <AddLogModal/>
        <EditLogModal/>
        <AddTechModal/>
        <Logs/>
        <TechListModal/>
      </div>
    </Fragment>
  );
}

export default App;
