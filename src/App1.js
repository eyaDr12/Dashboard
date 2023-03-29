import Login from "./pages/Login/Login";
import SignUP from "./pages/SignUp/SignUP";
import {Routes, Route } from "react-router-dom";
function App1() {
  return ( 
    <div style={{backgroundColor:" #f5f5f0 ",fontFamily:'"Cormorant Upright", serif'}}>
      <Routes>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App1;