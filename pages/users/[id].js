import { useState } from 'react';
import { Col, Row } from 'antd';
import UserUsecases from '../../src/http/usecases/UserUsecases.mjs';
import { handlePage } from '../../src/helpers/core.mjs';
import styles from '../../styles/User.module.scss';
import UserProfileCard from '../../client/components/profile/UserProfileCard';
import UserInfoCard from '../../client/components/profile/UserInfoCard';

export default function Home({ roles, user }) {
  console.log('qweqwe');
  const [userData, setUser] = useState(user);
  const afterSave = async (user) => setUser(user);

  return (
    <div className={styles.userProfile}>
      <Row gutter={16}>
        <Col span={8}>
          <UserProfileCard user={userData} roles={roles} afterSave={afterSave} />
        </Col>
        <Col span={16}>
          <UserInfoCard />
        </Col>
      </Row>
    </div>
  );
}

export const getServerSideProps = handlePage(UserUsecases, 'show', 'users_read');
