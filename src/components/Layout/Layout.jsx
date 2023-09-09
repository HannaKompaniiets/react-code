import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AppBarMenu from 'components/appBar/AppBarMenu';

const Layout = () => {
  return (
    <div className={css.menu}>
      <AppBar color="secondary" position="static">
        <Container maxWidth="m">
          <AppBarMenu />
        </Container>
      </AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
