'use client';
import MainLayout from '@/layout/MainLayout';
import { Button, Card, Flex, Grid, List, Modal, Tooltip, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { EyeOutlined, FullscreenOutlined, MoreOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <MainLayout activeTab="/careers">
        <h1></h1>
      </MainLayout>
    </>
  );
};

export default Page;
