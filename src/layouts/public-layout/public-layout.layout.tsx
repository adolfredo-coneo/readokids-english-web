import React from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../../components/app-bar/AppBar';

const PublicLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
