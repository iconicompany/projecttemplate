import { Modal } from 'antd';
import { AutoField, AutoForm, SubmitField } from 'uniforms-antd';
import createSchemaBridge from '../../../src/libs/uniforms-bridge.mjs';
import { useDispatch, useSelector } from 'react-redux';
import PermissionSchema from '../../../src/scheme/PermissionSchema.mjs';
import { updatePermission, createPermission, clearPermission } from '../../redux/reducers/permissionsReducer';

const PermissionModal = ({ isOpen, hideModal }) => {
  const dispatch = useDispatch()
  const permission = useSelector((state) => state.permissions.current);
  const handleOk = async (data) => {
    if (isCreate()) {
      dispatch(createPermission(data));
    } else {
      dispatch(updatePermission(data));
    }
    dispatch(clearPermission());
    hideModal();
  };

  const isCreate = () => !permission.id

  const getTitle = () => isCreate() ? 'Создание' : 'Редактирование';

  return (
    <>
      <Modal title={getTitle()} visible={isOpen} footer={null} onCancel={hideModal}>
        <AutoForm schema={createSchemaBridge(PermissionSchema.get())} onSubmit={handleOk} model={permission}>
          <AutoField name="title"/>
          <AutoField name="code"/>
          <SubmitField value="Сохранить" />
        </AutoForm>
      </Modal>
    </>
  )
}

export default PermissionModal;