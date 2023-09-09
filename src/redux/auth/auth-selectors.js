const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUser = state => state.auth.user;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const getIsAuthError = state => state.auth.isAuthError;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser,
  getIsAuthError,
  getUser,
};

export default authSelectors;
