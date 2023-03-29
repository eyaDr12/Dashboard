
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import {Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import CreateUser from "./pages/user/CreateUser";
import EditUser from "./pages/EditUser/EditUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Orders from "./pages/Orders/Orders";
import Calendar from "./pages/calendar/Calendar";

import "./App.css";



function App() {
  return ( 
  
    <div style={{backgroundColor:" #f5f5f0 ",fontFamily:'"Cormorant Upright", serif'}}>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/UserList' element={<UserList/>}/>
      <Route path='/CreateUser' element={<CreateUser/>}/>
      <Route path='/EditUser' element={<EditUser/>}/>
      <Route path='/ProductList' element={<ProductList/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/NewProduct' element={<NewProduct/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/Calendar' element={<Calendar/>}/>
      <Route path='/Calendar' element={<Calendar/>}/>


      </Routes>
      </div></div>);
  }
  
  export default App;