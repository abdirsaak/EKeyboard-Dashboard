import { ReactNode, createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type SigninDT = {
  username: string;
  password: string;
};

type AuthContextPropsDT = {
  children: ReactNode;
};

type AuthContextMethodsDT = {
  login: (input: SigninDT) => void;
  logout: () => void;
  isLoggedIn: boolean;
  loading: boolean;
};

const AuthContext = createContext<null | AuthContextMethodsDT>(null);

export const AuthContextProvider = ({ children }: AuthContextPropsDT) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (input: SigninDT) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:9393/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('adminUserName', data.user?.adminUserName);
        navigate('/');
      }
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminUserName');
    navigate('/signin');
  };

  const values = { login, logout, loading, isLoggedIn };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }
  return context;
};

export default useAuth;
