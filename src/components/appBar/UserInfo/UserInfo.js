import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from './download.jpg';
import authOperations from '../../../redux/auth/auth-operations';
import { Avatar, Box, Button } from '@mui/material';
import css from './UserInfo.module.css';
import { Link } from 'react-router-dom';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div>
      <Box
        sx={{ display: { xs: 'none', sm: 'flex' } }}
        className={css.user_menu}
      >
        <Avatar src={avatar} alt="img" width="32" />
        <p>Hello, {name}</p>
        <Link to="/profile">Profile</Link>

        <Button
          size="small"
          variant="outlined"
          color="primary"
          type="submit"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log OUT
        </Button>
      </Box>
    </div>
  );
};
