import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Flex, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: 'پروفایل',
    key: '0',
  },
  {
    label: 'تنظیمات',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'خروج',
    key: '3',
  },
];

const DropDown: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <Flex style={{ fontSize: 11, fontWeight: 'bolder' }}>محمدی مسعودی</Flex>
  </Dropdown>
);

export default DropDown;
