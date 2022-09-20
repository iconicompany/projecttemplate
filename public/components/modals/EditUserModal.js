import { Modal } from 'antd';
import { AutoField, AutoForm, SubmitField } from 'uniforms-antd';
import UserSchema from '../../../src/scheme/UserSchema.mjs';
import createSchemaBridge from '../../../src/libs/uniforms-bridge.mjs';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/reducers/usersReducer';
import { getRoles } from '../../redux/reducers/rolesReducer';
import { useEffect } from 'react';
import Map from '../../helpers/Map';

const EditUserModal = ({ isOpen, hideModal }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.current);
  const roles = useSelector((state) => state.roles.list);
  const fetchData = async () => dispatch(await getRoles());

  useEffect(() => {
    fetchData().catch(console.log);
  }, []);

  const handleOk = async (data) => {
    dispatch(updateUser(data));
    hideModal();
  };

  return (
    <>
      <Modal title="Редактирование пользователя" visible={isOpen} footer={null} onCancel={hideModal}>
        <AutoForm schema={createSchemaBridge(UserSchema.get())} onSubmit={handleOk} model={user}>
          <AutoField name="login"/>
          <AutoField name="name"/>
          <AutoField name="roleId" options={Map.forSelect(roles)} />
          <SubmitField value="Сохранить" />
        </AutoForm>
      </Modal>
    </>
  )
}

export default EditUserModal;