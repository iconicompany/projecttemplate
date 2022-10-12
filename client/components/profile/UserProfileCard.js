import { Avatar, Button, Card, Dropdown, Menu, Space, Tag } from 'antd';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import UserResource from '../../resources/UserResource.mjs';
import Notification from '../../helpers/Notification';
import UserSchema from '../../../src/scheme/UserSchema.mjs';
import { useEffect, useState } from 'react';
import ModelBuilder from '../../helpers/ModelBuilder.mjs';
import EditUserModal from './EditUserModal';
import { checkAccess } from '../../helpers/utils.mjs';
import Access from '../core/Access';

const schema = UserSchema.get();

const UserProfileCard = ({ user, roles, afterSave }) => {
  const [model, setModel] = useState({});
  const [actions, setActions] = useState([]);
  const [isOpenEdit, openEdit] = useState(false);

  useEffect(() => {
    checkAccess('users_update').then(canEdit => {
      if (canEdit) {
        setActions([
          <EditOutlined key="edit" onClick={() => openEdit(true)}/>,
          <Dropdown key="actions" overlay={<Menu
            items={[
              {
                key: '1',
                label: (
                  <>
                    {user.isBlocked && (
                      <Button onClick={unblock} type="text">Разблокировать</Button>
                    )}
                    {!user.isBlocked && (
                      <Button onClick={block} danger type="text">Заблокировать</Button>
                    )}
                  </>
                )
              }
            ]}
          />}>
            <Space>
              <EllipsisOutlined style={{ fontSize: 16 }}/>
            </Space>
          </Dropdown>
        ]);
      }
    });
  }, [user.isBlocked]);
  useEffect(() => {
    setModel(ModelBuilder.make(user, schema));
  }, [user]);

  const block = async () => {
    model.isBlocked = true;
    await save(model);
  };

  const unblock = async () => {
    model.isBlocked = false;
    await save(model);
  };

  const save = async () => {
    UserResource.update(user.id, model).then(result => {
      Notification.success();
      afterSave && afterSave(result);
    }).catch((error) => Notification.error(error.message));
  };

  return (
    <Card actions={actions}>
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
        title={
          <div>
            <span>{user.name}</span>
            <span className="user-status">
              {user.isBlocked && <Tag color="error">Заблокирован</Tag>}
              {!user.isBlocked && <Tag color="success">Активен</Tag>}
            </span>
          </div>
        }
        description={user?.relationMembers[0] && user?.relationMembers[0].role?.title || 'Нет роли'}
      />
      <Access permission='users_update'>
        <EditUserModal
          isOpen={isOpenEdit}
          hideModal={() => openEdit(false)}
          afterSave={afterSave}
          user={user}
          roles={roles}
        />
      </Access>
    </Card>
  );
};

export default UserProfileCard;