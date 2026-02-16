import { useState } from 'react'
import './App.css'
import Header from './Components/headerPiece'
import BodyPiece from './Components/bodyPiece'
import PartMenu from './Components/menuHandler.jsx'
function App() {

  return (
    <>
      {/* header */}
      <div>
      <Header />
      </div>

      {/* body */}
      <div>
        <BodyPiece />
      </div>

      <PartMenu />
    </>
  )
}

export default App
