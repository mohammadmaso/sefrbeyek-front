import React from 'react';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '../lib/AntdRegistry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'صفر به یک | راهنمای مسیر شغلی',
  description: 'سامانه راهنمای هوشمند مسیر شغلی',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="fa" dir="rtl">
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
