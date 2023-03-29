import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUP from "./pages/SignUp/SignUP";
import {Routes, Route } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import CreateUser from "./pages/user/CreateUser";
import EditUser from "./pages/EditUser/EditUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Orders from "./pages/Orders/Orders";
import Calendar from "./pages/calendar/Calendar";
import CreateEmploy from "./pages/CreateEmp/CreateEmploy";
import EmployList from "./pages/EmployList/EmployList";
import EditEmp from "./pages/EditEmploy/EditEmp";
import Tache from "./pages/Tache/Tache";
import Bill from "./pages/Bill/Bill";
import Bc from "./pages/Bc/Bc";
import Declaration from "./pages/declaration/Declaration";
import Sale from "./pages/sale/Sale";
import Fiche from "./pages/FicheDeP/Fiche";
import SaleInf from "./pages/SaleInf/SaleInf";
import Message from "./pages/Message/Message";
import BillTab from "./pages/BillAll/BillTab";
import Login from "./pages/Login/Login";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  
    <Routes>
    <Route element={<App/>}>
     <Route  path="/home" element={<Home/>} />
      <Route path='/UserList' element={<UserList/>}/>
      <Route path='/CreateUser' element={<CreateUser/>}/>
      <Route path='/EditUser' element={<EditUser/>}/>
      <Route path='/ProductList' element={<ProductList/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/NewProduct' element={<NewProduct/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/Calendar' element={<Calendar/>}/>
      <Route path='/CreateEmploy' element={<CreateEmploy/>}/>
      <Route path='/EmployList' element={<EmployList/>}/>
      <Route path='/EditEmp' element={<EditEmp/>}/>
      <Route path='/Tache' element={<Tache/>}/>
      <Route path='/Bill' element={<Bill/>}/>
      <Route path='/Bc' element={<Bc/>}/>
      <Route path='/Declaration' element={<Declaration/>}/>
      <Route path='/Sale' element={<Sale/>}/>
      <Route path='/Fiche' element={<Fiche/>}/>
      <Route path='/SaleInf' element={<SaleInf/>}/>
      <Route path='/Message' element={<Message/>}/>
      <Route path='/BillTab' element={<BillTab/>}/>
      </Route>
        <Route path="/signup" element={<SignUP />} />
        <Route path='/' element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
