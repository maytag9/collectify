import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ListView from '../pages/listView';

const App = () => {

  useEffect(() => {
    console.log('rendering App root with Router and all routs ..............');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list:listId" element={<ListView/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
