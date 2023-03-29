import { Outlet } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";


const SidebarLayout = () => (
    <>
       <Topbar/>
       <div className="container">
      <Sidebar/>
      <Outlet />
     
     </div>
    </>
  );
  export default SidebarLayout;