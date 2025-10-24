import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Works from './Components/Works'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='works' element={<Works />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
