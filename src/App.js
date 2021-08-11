import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './App.css'

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS so we can use modals
    M.AutoInit();
  })
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
