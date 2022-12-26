import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./componets/Main";
import Navbar from "./componets/Navbar";
import PrivateRoute from "./componets/PrivateRoute";
import Account from "./pages/Account";
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/React-Netflix-Clone/"element={<Home />}></Route>
        <Route path='/React-Netflix-Clone/login' element={<Login />}></Route>
        <Route path="/React-Netflix-Clone/signup" element={<Signup />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/React-Netflix-Clone/account" element={<Account />}></Route>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
