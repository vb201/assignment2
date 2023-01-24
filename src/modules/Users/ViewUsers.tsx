import React from 'react';
import './test.css';
import { useAppSelector } from '../../hooks/redux';
import Header from '../../components/Header/index';
import { UserInterface } from '../../features/users/userSlice';
import ViewUserCard from '../../components/ViewUserCard/index';

const ViewUsers = () => {
  const users = useAppSelector((state) => state.user.users);

  const GridStyles = {
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    padding: '2em',
    alignItems: 'start',
    justifyItems: 'start',
  };

  return (
    <>
      <Header />
      <div>
        <div style={GridStyles}>
          {users.map((user: UserInterface, index: number) => (
            <ViewUserCard {...user} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewUsers;
