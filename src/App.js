
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Outlet } from 'react-router-dom';
import "./App.css";

function App() {
  return ( 
  
    <div style={{backgroundColor:" #f5f5f0 ",fontFamily:'"Cormorant Upright", serif'}}>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Outlet />
      </div>
      
      
      </div>);
  }
  
  export default App;