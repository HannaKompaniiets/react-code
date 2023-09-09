import { React } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';

const Navigation = () => {
  const StyledLink = styled(NavLink)`
    &.active {
      text-decoration: underline;
    }
  `;

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const homeNavItem = { label: 'Home', link: '/' };
  const contactsNavItem = { label: 'Contacts', link: '/contacts' };

  const createLinkBtn = item => (
    <Button
      key={item.label}
      LinkComponent={StyledLink}
      to={item.link}
      sx={{ color: '#fff' }}
    >
      {item.label}
    </Button>
  );

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {createLinkBtn(homeNavItem)}
      {isLoggedIn && createLinkBtn(contactsNavItem)}
    </Box>
  );
};
export default Navigation;
