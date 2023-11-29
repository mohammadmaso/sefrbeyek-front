'use client';
import React from 'react';
import Icon, { BarChartOutlined, CommentOutlined, CopyOutlined, DatabaseOutlined, PhoneOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, ConfigProvider, Divider, Flex, Image, Layout, Menu, theme } from 'antd';
import BreadcrumbComponent from './BreadCrump';
import { ItemType, MenuItemType } from 'rc-menu/lib/interface';
import { Typography } from 'antd';
import { useRouter } from 'next/navigation';
import theme2 from '../theme/themeConfig';
import Link from 'next/link';
import DropDown from './DropDown';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: '/assessment',
    label: 'ارزیابی شغلی',
    icon: <CopyOutlined />,
  },
  {
    key: '/careers',
    label: 'بانک اطلاعاتی مشاغل',
    icon: <DatabaseOutlined />,
  },
  {
    key: '/result',
    label: 'کارنامه‌ی ارزیابی',
    icon: <BarChartOutlined />,
  },
  {
    key: '/counselling',
    label: 'مشاوره شغلی',
    icon: <CommentOutlined />,
  },
  {
    key: '/support',
    label: 'پشتیبانی',
    icon: <PhoneOutlined />,
  },
];

const App = ({ children, activeTab }: any) => {
  const router = useRouter();
  return (
    <ConfigProvider theme={theme2}>
      <Layout style={{ margin: 0 }}>
        <Layout style={{ margin: 0 }}>
          <Header style={{ boxShadow: '10px', padding: '10px', right: 0, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
            <Flex style={{ width: '100vw' }} justify="space-between" align="center">
              <Link href="/">
                <Flex>
                  <Avatar size={'large'} src="logo.png" alt="logo" />
                  <Flex vertical gap={0}>
                    <Typography.Text style={{ fontSize: '16px', fontWeight: 'bolder' }}>صفر به یک</Typography.Text>
                    <Typography.Text style={{ color: 'gray', fontSize: '16', fontWeight: 'light' }}>پلتفرم راهنمای مسیر شغلی</Typography.Text>
                  </Flex>
                </Flex>
              </Link>
              <Flex align="center" gap={3}>
                <DropDown />
                <Avatar />
              </Flex>
            </Flex>
          </Header>
        </Layout>
        <Layout style={{ margin: 0 }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="40"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            theme="light"
          >
            <Menu theme="light" mode="inline" style={{ minHeight: '100vh' }} defaultSelectedKeys={[activeTab]} items={items} onSelect={(info) => router.push(info.key)} />
          </Sider>
          <Content style={{ margin: 10 }}>{children}</Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: 'transparent' }}>تمامی حقوق برای آکادمی صفر به یک محفوظ است.</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
