import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      {/* Make a header component */}
      <Link to="/">Home</Link>
      <Link to="/create-users">Create Users</Link>
    </>
  );
};

export default Header;
