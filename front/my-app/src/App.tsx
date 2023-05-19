import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './features/counter/Login';
import Register from './features/counter/Register';
import CRUD from './features/counter/CRUD';
import { selectLogged } from './features/counter/loginSlice'
import { useAppSelector, useAppDispatch } from './app/hooks';
import MyNavbar from './MyNavbar';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  const logged = useAppSelector(selectLogged);
  return (
    <div>
      <div style={{ height: "25%", width: "100%", padding: "1%", backgroundColor: "GrayText" }}>waiting for a component</div>
      <div className="App " style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>Left
          <Login></Login><br></br>
          <MyNavbar></MyNavbar> </div>
        <div style={{ width: "75%", backgroundColor: "pink" }}>
          <Outlet></Outlet>
          {logged ? <CRUD></CRUD> : <Register></Register>}
        </div>
        <br />
        
      </div>
      <div style={{ height: "25%", padding: "1%", backgroundColor: "goldenrod" }}>
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
