import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './navbar';

function Layout() {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  );
}

export default Layout;
