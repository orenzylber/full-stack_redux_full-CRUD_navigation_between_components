import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './features/counter/Login';
import Register from './features/counter/Register';
import CRUD from './features/counter/CRUD';
import {selectLogged} from './features/counter/loginSlice'
import { useAppSelector, useAppDispatch } from './app/hooks';
import MyNavbar from './MyNavbar';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
    const logged = useAppSelector(selectLogged);
  return (
    <div className="App " style={{display: "flex"}}>
      <Navbar activePage={''}></Navbar>
      <div style={{width: "25%"}}>Left
      <Login></Login><br></br>
      <MyNavbar></MyNavbar> </div>
      <div style={{width: "75%"}}>
        
        <Outlet></Outlet>
        {logged ? <CRUD></CRUD>:<Register></Register>}</div>
      <Footer></Footer>  
       
    </div>
  );
}

export default App;
