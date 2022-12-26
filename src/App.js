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
        <Route path="/"element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/account" element={<Account />}></Route>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
