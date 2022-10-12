import { Col, Modal, Row } from 'antd';
import { AutoField, AutoForm, SubmitField } from 'uniforms-antd';
import createSchemaBridge from '../../../src/libs/uniforms-bridge.mjs';
import PermissionSchema from '../../../src/scheme/PermissionSchema.mjs';
import { useEffect, useState } from 'react';
import Notification from '../../helpers/Notification';
import PermissionResource from '../../resources/PermissionResource.mjs';

const PermissionModal = ({ permission = {}, isOpen, hideModal, afterSave }) => {
  const [model, setModel] = useState(permission);

  useEffect(() => {
    setModel(permission);
  }, [permission?.id]);

  const store = (data) => {
    PermissionResource.store({ ...data, id: permission?.id }).then(result => {
      Notification.success();
      hideModal();
      afterSave && afterSave(result);
    }).catch(err => Notification.error(err.message));
  };

  const isCreate = () => !model?.id;

  const getTitle = () => isCreate() ? 'Создание' : 'Редактирование';

  return (
    <>
      <Modal title={getTitle()} visible={isOpen} footer={null} onCancel={hideModal}>
        <AutoForm schema={createSchemaBridge(PermissionSchema.get())} onSubmit={store} model={model}>
          <AutoField name="title"/>
          <AutoField name="code"/>
          <SubmitField value="Сохранить"/>
        </AutoForm>
      </Modal>
    </>
  );
};

export default PermissionModal;