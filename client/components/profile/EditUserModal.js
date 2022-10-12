import { Modal } from 'antd';
import { AutoField, AutoForm, SubmitField } from 'uniforms-antd';
import createSchemaBridge from '../../../src/libs/uniforms-bridge.mjs';
import Map from '../../helpers/Map';
import { useEffect, useState } from 'react';
import UserResource from '../../resources/UserResource.mjs';
import Notification from '../../helpers/Notification';
import ModelBuilder from '../../helpers/ModelBuilder.mjs';
import UserSchema from '../../../src/scheme/UserSchema.mjs';

const schema = UserSchema.get();

const EditUserModal = ({ isOpen, hideModal, user = {} , roles, afterSave }) => {
  const [model, setModel] = useState();

  const store = (data) => {
    UserResource.store({ ...data, id: user?.id }).then(result => {
      Notification.success();
      hideModal();
      afterSave && afterSave(result);
    }).catch(err => Notification.error(err.message))
  };

  const isCreate = () => !model?.id;

  const getTitle = () => isCreate() ? 'Создание' : 'Редактирование';

  useEffect(() => {
    setModel(ModelBuilder.make(user, schema));
  }, [user?.id]);

  return (
    <>
      <Modal title={getTitle()} visible={isOpen} footer={null} onCancel={hideModal}>
        <AutoForm showInlineError schema={createSchemaBridge(schema)} onSubmit={store} model={model}>
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