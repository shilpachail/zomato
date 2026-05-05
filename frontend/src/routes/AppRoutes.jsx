import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import Home from '../pages/general/Home';
import Saved from '../pages/general/Saved';
import BottomNav from '../components/BottomNav';
import CreateFood from '../pages/food-partner/CreateFood';
import Profile from '../pages/food-partner/Profile';

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(null);

useEffect(() => {
  axios.get("http://localhost:3000/api/auth/me", { withCredentials: true })
    .then(() => setIsAuth(true))
    .catch(() => setIsAuth(false));
}, []);

if (isAuth === null) {
  return <div>Loading...</div>;
}
  return (
   <Router>
    <Routes>
         <Route path="/register" element={<ChooseRegister />} />
                <Route path="/user/register" element={<UserRegister />} />
                <Route path="/user/login" element={!isAuth ? <UserLogin /> : <Navigate to="/" />}/>
                <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
                <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
               <Route path="/" element={isAuth ? <><Home /><BottomNav /></> : <Navigate to="/user/login" />}/>
                <Route path="/saved" element={isAuth ? <><Saved /><BottomNav /></> : <Navigate to="/user/login" />}/>
                <Route path="/create-food" element={<CreateFood />} />
                <Route path="/food-partner/:id" element={<Profile />} />
                
    </Routes>
   </Router>
  )
}

export default AppRoutes