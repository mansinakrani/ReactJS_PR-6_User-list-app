/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import './App.css';
import { AppList } from "./components/AppList/AppList"

function App() {
  return (
    <>
    <div className="App">
      <AppList />
    </div>
</>
  );
}
//pass fetchdata as a prop
export default App;