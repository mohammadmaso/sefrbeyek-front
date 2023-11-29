'use client';
import MainLayout from '@/layout/MainLayout';
import { Button, Card, Flex, Grid, List, Modal, Tooltip, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { FunctionComponent, ReactComponentElement } from 'react';
import { careers_category } from './list';
import { EyeOutlined, FullscreenOutlined, MoreOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

type Props = {};

const info = (data: string) => {
  Modal.info({
    title: 'خلاصه توضیحات دسته‌بندی شغلی',
    content: <div>{data}</div>,
    okText: 'بازگشت',
    okButtonProps: { style: { fontFamily: 'Alibaba' } },
    style: { fontFamily: 'Alibaba', width: '90vw' },
    width: '90vw',
  });
};

const Page = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <MainLayout activeTab="/careers">
        <h1>بانک اطلاعاتی مشاغل</h1>

        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={careers_category}
          renderItem={(item) => (
            <List.Item>
              <Card key={item._id} hoverable cover={<img alt="example" src={`http://mindlercareerlibrarynew.imgix.net/${item._source.image}`} />} actions={[<FullscreenOutlined key={`${item._id}_show`} onClick={() => info(item._source.description)} />, <EyeOutlined key={`${item._id}_description`} onClick={() => router.push(`careers/${item._source.tagline}`)} />]}>
                <Meta title={item._source.career_domain_name} />
              </Card>
            </List.Item>
          )}
        />
      </MainLayout>
    </>
  );
};

export default Page;
