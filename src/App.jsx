import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './paginas/Home'
import Contacto from './paginas/Contacto'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App
