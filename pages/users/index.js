import { Table, Typography } from 'antd';

const { Title } = Typography;
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [tableData, setTableData] = useState({ meta: {}, rows: []});
  const fetchData = () => {
    setTableData({
      meta: {},
      rows: [
        {
          id: 1,
          name: 'test name',
          login: 'test login',
        }
      ]
    })
  }

  useEffect(() => {
    setPagination({ ...pagination, ...tableData.meta })
  }, [tableData])
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: 'ФИО',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'Логин',
      dataIndex: 'login',
      sorter: true,
    },
  ];

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchData({ ...sorter, ...newPagination, ...filters });
  };

  useEffect(() => {
    fetchData(pagination);
  }, []);

  return (
    <div>
      <Card>
        <Title level={4}>Пользователи</Title>
        <Table
          onRow={(record) => ({
            onClick: () => router.push(`users/${record.id}`)
          })}
          columns={columns}
          dataSource={tableData.rows}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </Card>
    </div>
  )
}
