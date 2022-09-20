import { Button, PageHeader, Table, Typography } from 'antd';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import btnStyles from '../../styles/buttons.module.scss'
// import RoleModal from '../../public/components/modals/RoleModal';
// import Popup from '../../public/helpers/Popup';

export default function Roles() {
  const [isOpen, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchData = () => {
  }

  const createRole = () => {
  }

  const editRole = (role) => {
  }

  const removeRole = async (role) => {
  }

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Название',
      dataIndex: 'title',
      sorter: (a, b) => a.title > b.title
    },
    {
      title: 'Код',
      dataIndex: 'code',
      sorter: (a, b) => a.code > b.code
    },
    {
      title: 'Действия',
      render: (record) =>
        (
          <div className={btnStyles.button_group}>
            <Button onClick={() => editRole(record)} type="primary" shape="circle" icon={<EditOutlined/>}/>
            <Button onClick={() => removeRole(record)} type="primary" danger shape="circle" icon={<DeleteOutlined/>}/>
          </div>
        )
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Card>
        <PageHeader
          title="Title"
          extra={[
            <Button onClick={() => createRole()} key="1" type="primary">Создать роль</Button>,
          ]}
        >
        </PageHeader>
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </Card>
      {/*<RoleModal isOpen={isOpen} hideModal={() => setOpen(false)} />*/}
    </div>
  )
}
