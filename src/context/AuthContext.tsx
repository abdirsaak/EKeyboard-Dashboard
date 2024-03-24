import { ReactNode, createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../util/data';

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
  loading: boolean;
};

const AuthContext = createContext<null | AuthContextMethodsDT>(null);

export const AuthContextProvider = ({ children }: AuthContextPropsDT) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (input: SigninDT) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      console.log(data);
      if (!data.error) {
        localStorage.setItem('token', JSON.stringify(data.token));
        navigate('/');
      } else {
        toast.error(data.error);
      }
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  const values = { login, logout, loading };

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
