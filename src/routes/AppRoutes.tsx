import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import DefaultLayout from '../config/layout/DefaultLayout';
import Register from '../pages/Register';
import EditRecado from '../pages/EditRecado';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<DefaultLayout component={Home} />} />
        <Route path="/edit-recado/:id" element={<DefaultLayout component={EditRecado} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
