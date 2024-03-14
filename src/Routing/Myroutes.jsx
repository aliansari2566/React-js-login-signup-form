import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter

import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import PageNotFound from '../pages/PageNotFound';

const MyRoute = () => (
  <Router> {/* Wrap your Routes with BrowserRouter */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default MyRoute;
