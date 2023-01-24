import { Avatar } from 'antd';
import React from 'react';
import { UserInterface } from '../../features/users/userSlice';
import { UserOutlined } from '@ant-design/icons';
interface ViewUserCardProps extends UserInterface {
  border?: boolean;
}
const ViewUserCard: React.FC<ViewUserCardProps> = ({
  name,
  gender,
  email,
  mobile,
  technology,
  profilePicture,
  border = true,
}: ViewUserCardProps) => {
  return (
    <div className={border ? 'card' : 'card-no-border'}>
      <div className="card-header">
        {profilePicture != null ? (
          // profile exist
          <Avatar size={92} shape="square" src={profilePicture} />
        ) : (
          // profile not exist
          <Avatar size={92} shape="square" icon={<UserOutlined />} />
        )}
        <div
          style={{
            paddingLeft: '2em',
          }}
        >
          <p>
            Name: <span style={{ fontWeight: 'normal' }}>{name}</span>
          </p>
          <p>
            Gender: <span style={{ fontWeight: 'normal' }}>{gender}</span>
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>
            Email: <span style={{ fontWeight: 'normal' }}>{email}</span>
          </p>
        </div>
        <div>
          <p>
            Mobile: <span style={{ fontWeight: 'normal' }}>{mobile}</span>
          </p>
        </div>
        <div>
          <p>
            <span style={{ fontWeight: 'bold' }}>
              {technology?.length > 1 ? 'Technologies: ' : 'Technology: '}
            </span>

            {technology?.length > 0
              ? technology.map((tech: string, index: number) => (
                  <span style={{ fontWeight: 'normal' }} key={index}>
                    {tech}
                    {technology.length > index + 1 ? ', ' : ' '}
                  </span>
                ))
              : 'None'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewUserCard;
