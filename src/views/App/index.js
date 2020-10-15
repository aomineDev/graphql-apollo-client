import React from 'react'

import Characters from '../../components/Characters'

import logo from '../../assets/logo.svg'

import './App.css'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Characters />
      </header>
    </div>
  )
}

export default App
