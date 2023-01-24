import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import CreateUsers from './modules/Users/CreateUsers';
import ViewUsers from './modules/Users/ViewUsers';
import TestUser from './modules/Users/TestUser';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/users/create" />} />
          <Route path="/users/view" element={<ViewUsers />} />
          <Route path="/users/create" element={<CreateUsers />} />
          <Route path="/test" element={<TestUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
