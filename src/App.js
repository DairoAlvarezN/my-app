import  Login  from "./components/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/layout"
import Listar from "./components/Listar/Listar";
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        
        <Route path="/app" element={<Listar/>}></Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
