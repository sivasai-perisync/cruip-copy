import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
        <Route path="/" element={<Home />}></Route>
      
      </Routes>
    </>
  )
}

export default App
