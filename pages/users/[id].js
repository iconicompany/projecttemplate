import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Avatar, Card, Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import EditUserModal from '../../public/components/modals/EditUserModal';
import { useDispatch, useSelector } from 'react-redux';
import { readUser } from '../../public/redux/reducers/usersReducer';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.current);
  const [isOpenEdit, openEdit] = useState(false);
  const fetchData = async () => dispatch(await readUser(id));

  useEffect(() => {
    fetchData().catch(console.log);
  }, []);


  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            actions={[
              <EditOutlined key="edit" onClick={() => openEdit(true)} />,
              <SettingOutlined key="setting"/>,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={user.name}
              description={user.role?.title || 'Нет роли'}
            />
          </Card>
        </Col>
        <Col span={16}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
      <EditUserModal isOpen={isOpenEdit} hideModal={() => openEdit(false)} user={user} />
    </div>
  )
}
