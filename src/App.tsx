import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import CreateUsers from './modules/Users/CreateUsers';
import ViewUsers from './modules/Users/ViewUsers';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/users/create" />} />
        <Route path="/users/view" element={<ViewUsers />} />
        <Route path="/users/create" element={<CreateUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
