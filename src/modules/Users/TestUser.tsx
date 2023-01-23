import React from 'react';
import './test.css';
import { useAppSelector } from '../../hooks/redux';
import Header from '../../components/Header';
import { UserInterface } from '../../features/users/userSlice';
import { Avatar } from 'antd';
const TestUser = () => {
  const users = useAppSelector((state) => state.user).users;
  const GridStyles = {
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    padding: '2em',
    alignItems: 'center',
  };

  return (
    <>
      <Header />
      <div>
        <div style={GridStyles}>
          {users.map((user: UserInterface, index: number) => (
            <UserCard {...user} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestUser;

const UserCard: React.FC<UserInterface> = ({
  name,
  gender,
  email,
  mobile,
  technology,
}: UserInterface) => {
  return (
    <div className="card">
      <div className="card-header">
        <Avatar size={64} icon="user" />
        ddsc
      </div>
      <p className="card-bold">
        Name :<span className="card-text">{name}</span>
      </p>
      <div className="row">
        <div className="row">
          <p className="card-text">
            gender :<span className="card-text">{gender}</span>
          </p>
        </div>
        <div className="row">
          <p className="card-text">
            Email :<span className="card-text">{email}</span>
          </p>
        </div>
        <div className="row">
          <p className="card-text">
            Mobile :<span className="card-text">{mobile}</span>
          </p>
        </div>
        <div className="row">
          <p className="card-text">
            Technology :
            {technology.map((tech: string, index: number) => (
              <span className="card-text" key={index}>
                {tech}
                {/* Fixxxxx */}
                {technology.length > index ? ', ' : ' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
