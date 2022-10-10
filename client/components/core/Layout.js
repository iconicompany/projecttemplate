import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
	UsergroupAddOutlined,
	NodeIndexOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import LoginBtn from './LoginBtn'
import { getUserPermissions } from '../../helpers/utils.mjs';

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
	const router = useRouter();
	const [collapsed, setCollapsed] = useState(true);
	const [tabs, setTabs] = useState([]);

	useEffect(async () => {
		const userPermissions = await getUserPermissions();

		setTabs([
			{
				key: '1',
				icon: <UserOutlined/>,
				label: 'Домашняя',
				href: '/'
			},
			{
				key: '2',
				icon: <UsergroupAddOutlined />,
				label: 'Пользователи',
				href: '/users',
				permission: 'users_read'
			},
			{
				key: '3',
				icon: <NodeIndexOutlined />,
				label: 'Роли',
				href: '/dictionaries/roles',
				permission: 'roles_read'
			},
			{
				key: '4',
				icon: <NodeIndexOutlined />,
				label: 'Права',
				href: '/dictionaries/permissions',
				permission: 'permissions_read'
			}
		].filter(tab => !tab.permission || userPermissions.includes(tab.permission)))
	}, [])

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo"/>
				<Menu
					onClick={async (event) => {
						await router.push(event.item.props.href)
					}}
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={tabs}
				/>
			</Sider>
			<Layout className="site-layout">
				<Header
					className="site-layout-background"
					style={{
						padding: 0
					}}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: () => setCollapsed(!collapsed)
					})}
					<LoginBtn/>
				</Header>
				<Content
					style={{ margin: '16px' }}>
					{children}
				</Content>
			</Layout>
		</Layout>
	)
}

export default AppLayout
