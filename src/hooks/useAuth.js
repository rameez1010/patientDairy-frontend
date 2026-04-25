import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logout, setCredentials } from '../services/auth/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state) => state.auth);

  const login = (credentials) => dispatch(loginUser(credentials));
  const performLogout = () => dispatch(logout());
  const updateCredentials = (data) => dispatch(setCredentials(data));

  return { 
    user, 
    token, 
    loading, 
    error, 
    login, 
    logout: performLogout, 
    setCredentials: updateCredentials 
  };
};

export default useAuth;
