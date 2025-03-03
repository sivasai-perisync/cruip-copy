import './App.css'
import { Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>

  )
}

export default App
