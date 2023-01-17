import React from 'react';
import CreateUsers from './modules/Users/CreateUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewUsers from './modules/Users/ViewUsers';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateUsers />} />
          <Route path="/create-users" element={<CreateUsers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
