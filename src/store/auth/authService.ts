import axios from 'axios';
import { API_BASE_URL } from '../../lib/data';

interface SigninDT {
  username: string;
  password: string;
}

const signin = async (userData: SigninDT) => {
  const response = await axios.post(`${API_BASE_URL}/admin`, userData);
  if (response.data) {
    localStorage.setItem('token', JSON.stringify(response.data.token));
  }

  // get token from local storage
  const token = await JSON.parse(localStorage.getItem('token') as string);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return response.data;
};

const signout = () => {
  localStorage.removeItem('token');
  axios.defaults.headers.common['Authorization'] = '';
};

const getMe = async () => {
  // get token from local storage
  const token = await JSON.parse(localStorage.getItem('token') as string);

  const response = await axios.get(`${API_BASE_URL}/admin/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const authService = {
  signin,
  signout,
  getMe,
};

export default authService;
