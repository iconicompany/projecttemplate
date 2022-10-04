import { Button, PageHeader, Table, Typography } from 'antd';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import btnStyles from '../../styles/buttons.module.scss'

export default function Permissions() {
  const [isOpen, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchData = () => {
  }

  const createPermission = () => {
  }

  const editPermission = (permission) => {
  }

  const removePermission = async (permission) => {
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
            <Button onClick={() => editPermission(record)} type="primary" shape="circle" icon={<EditOutlined/>}/>
            <Button onClick={() => removePermission(record)} type="primary" danger shape="circle" icon={<DeleteOutlined/>}/>
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
            <Button onClick={() => createPermission()} key="1" type="primary">Создать роль</Button>,
          ]}
        >
        </PageHeader>
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </Card>
      {/*<PermissionModal isOpen={isOpen} hideModal={() => setOpen(false)} />*/}
    </div>
  )
}
