import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
	UsergroupAddOutlined,
	NodeIndexOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import LoginBtn from './LoginBtn'

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
	const router = useRouter()
	const [collapsed, setCollapsed] = useState(false)
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
					items={[
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
							href: '/users'
						},
						{
							key: '3',
							icon: <NodeIndexOutlined />,
							label: 'Роли',
							href: '/dictionaries/roles'
						},
						{
							key: '4',
							icon: <NodeIndexOutlined />,
							label: 'Права',
							href: '/dictionaries/permissions'
						}
					]}
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
