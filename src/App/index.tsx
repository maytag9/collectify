import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ListView from '../pages/listView';
import ComingSoon from '../pages/comingSoon';
const App = () => {
  useEffect(() => {
    console.log('rendering App root with Router and all routs ..............');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/collections" element={<ListView />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
