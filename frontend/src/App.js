import React, { Suspense, lazy } from 'react';

import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"





const Login=lazy(()=>import('./pages/Login'));
const Register=lazy(()=>import('./pages/Register'));
const Home = lazy(()=>import('./pages/Home'));
const Single=lazy(()=>import('./pages/Single'));
const Write=lazy(()=>import('./pages/Write'));

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};



function App() {
  return (
    <div className="app">
      <div className="container">
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route exact path ="/" element={<Home/>}/>
            <Route path ="/post/:id" element={<Single/>}/>
            <Route path ="/write" element={<Write/>}/>
          </Route>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Suspense>
      </div>
    </div>
  );
}

export default App;
