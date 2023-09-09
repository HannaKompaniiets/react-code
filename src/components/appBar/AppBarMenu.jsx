import { React } from 'react';
import Navigation from './Navigation';
import AuthNavigation from './AuthNavigation';
import { UserInfo } from './UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import css from './AppBarMenu.module.css';

const AppBarMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={css.menu}>
      <Navigation />
      {!isLoggedIn ? <AuthNavigation /> : <UserInfo />}
    </header>
  );
};
export default AppBarMenu;
