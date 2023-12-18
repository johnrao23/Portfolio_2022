import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './static/components/Main';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/static" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
