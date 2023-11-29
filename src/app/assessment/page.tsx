'use client';
import MainLayout from '@/layout/MainLayout';
import { List, Card, Flex, Typography, Button } from 'antd';
import Meta from 'antd/es/card/Meta';
import { info } from 'console';
import router from 'next/router';
import React from 'react';
import { RadarChartOutlined } from '@ant-design/icons';
import Link from 'next/link';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <MainLayout activeTab="/assessment">
        <Flex vertical justify="start" align="end" style={{ width: '100%', minHeight: '400px', background: "url('https://mindlerimages.imgix.net/tinyimg/class8.svg') right 0px bottom 0px no-repeat;" }}>
          <Flex style={{ padding: '3rem' }} vertical justify="end">
            <h1>مسیر شغلی‌ خودت رو آگاهانه پیدا کن...</h1>
            <Link href={'/assessment/start'}>
              <Button size="large" shape="round" block={false} type="primary">
                شروع آزمون
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Flex justify="center" style={{ backgroundColor: '#2589cc30' }}>
          <Flex style={{ minHeight: '120px' }} vertical justify="center" align="center">
            <RadarChartOutlined />
            <p style={{ color: 'primary' }}>با ارزیابی دقیق پنج بعدی خود را بشناسید.</p>
          </Flex>
        </Flex>
      </MainLayout>
    </>
  );
};

export default page;
