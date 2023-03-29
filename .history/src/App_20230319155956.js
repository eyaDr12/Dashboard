
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import {Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Orders from "./pages/Orders/Orders";
import Calendar from "./pages/calendar/Calendar";
import Seeuser from "./pages/seeUser/Seeuser.jsx";

import "./App.css";



function App() {
  return ( 
  
    <div style={{backgroundColor:" #f5f5f0 ",fontFamily:'"Cormorant Upright", serif',height:'180vh'}}>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/UserList' element={<UserList/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/NewUser' element={<NewUser/>}/>
      <Route path='/ProductList' element={<ProductList/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/NewProduct' element={<NewProduct/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/Calendar' element={<Calendar/>}/>
      <Route path='/Seeuser' element={<Seeuser/>}/>

      </Routes>
      </div></div>);
  }
  
  export default App;