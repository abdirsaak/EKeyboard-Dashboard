import { API_BASE_URL } from '../../lib/data';

const fetchOrders = async () => {
  const token = await JSON.parse(localStorage.getItem('token') as string);

  const response = await fetch(`${API_BASE_URL}/orders/get-orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

const orderServices = { fetchOrders };

export default orderServices;
