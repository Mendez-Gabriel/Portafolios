import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Specific/navBar/NavBar";
import Homepage from "./Page/homepage/Homepage";

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
