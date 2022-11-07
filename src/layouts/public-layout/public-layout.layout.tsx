import React from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../../components/app-bar/AppBar';
import AppFooter from '../../components/app-footer/AppFooter';

const PublicLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <AppFooter />
    </>
  );
};

export default PublicLayout;
