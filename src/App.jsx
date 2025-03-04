import './App.css'
import { Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/index"
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>

  )
}

export default App
