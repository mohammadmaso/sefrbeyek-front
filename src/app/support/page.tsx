import MainLayout from '@/layout/MainLayout';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';
import React, { createElement, useState } from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <MainLayout activeTab="/support">
      <h1>راه‌های ارتباط با پشتیبان</h1>
    </MainLayout>
  );
};

export default Page;
