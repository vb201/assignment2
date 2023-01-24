import React from 'react';

import Header from '../../components/Header';
import CreateUserForm from '../../components/CreateUserForm';

import type { Property } from 'csstype';

const FormStyles = {
  display: 'flex',
  flexDirection: 'column' as Property.FlexDirection,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2em',
};
const CreateUsers: React.FC = () => {
  return (
    <>
      <Header />
      <div style={FormStyles}>
        <h1>Create User</h1>
        <CreateUserForm />
      </div>
    </>
  );
};

export default CreateUsers;
