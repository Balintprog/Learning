import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Fileupload from './Fileupload';
import { useState } from "react"

function App() {
  return (
    <div className="App">
      <Header/> 
      <Fileupload/>
    </div>
  );
}


export default App;