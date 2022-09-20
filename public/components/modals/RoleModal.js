import { Col, Modal, Row } from 'antd';
import { AutoField, AutoForm, SubmitField } from 'uniforms-antd';
import createSchemaBridge from '../../../src/libs/uniforms-bridge.mjs';
import { useDispatch, useSelector } from 'react-redux';
import RoleSchema from '../../../src/scheme/RoleSchema.mjs';
import { updateRole, createRole, clearRole } from '../../redux/reducers/rolesReducer';

const RoleModal = ({ isOpen, hideModal }) => {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.roles.current);
  const handleOk = async (data) => {
    if (isCreate()) {
      dispatch(createRole(data));
    } else {
      dispatch(updateRole(data));
    }
    dispatch(clearRole());
    hideModal();
  };

  const isCreate = () => !role.id;

  const getTitle = () => isCreate() ? 'Создание' : 'Редактирование';

  return (
    <>
      <Modal title={getTitle()} visible={isOpen} footer={null} onCancel={hideModal} width={1000}>
        <AutoForm schema={createSchemaBridge(RoleSchema.get())} onSubmit={handleOk} model={role}>
          <Row>
            <Col xs={24} xl={12}>
              <AutoField name="title"/>
            </Col>
            <Col xs={24} xl={12}>
              <AutoField name="code"/>
            </Col>
          </Row>
          <SubmitField value="Сохранить" />
        </AutoForm>
      </Modal>
    </>
  )
}

export default RoleModal;