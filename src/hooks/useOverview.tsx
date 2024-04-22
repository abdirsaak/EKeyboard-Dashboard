import { useState } from 'react';
import { API_BASE_URL } from '../lib/data';
import { Product } from '../types/product';
import { NewCustomersDT } from '../types/types';

type OverviewDT = {
  totalUsers: number;
  totalProducts: number;
  totalOrders: number;
  products: Product;
  newCustomers: NewCustomersDT[];
};

const useOverview = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [newCustomers, setNewCustomers] = useState<NewCustomersDT[] | null>(
    null,
  );
  const [products, setProducts] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const getOverview = async () => {
    setLoading(true);
    try {
      const token_String = await JSON.parse(
        localStorage.getItem('token') as string,
      );

      const response = await fetch(`${API_BASE_URL}/admin/get-overviews`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token_String}`,
        },
      });

      const data: OverviewDT = await response.json();
      if (data) {
        setTotalUsers(data.totalUsers);
        setTotalOrders(data.totalOrders);
        setTotalProducts(data.totalProducts);
        setProducts(data.products);
        setNewCustomers(data.newCustomers);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getOverview,
    totalUsers,
    totalOrders,
    totalProducts,
    newCustomers,
    products,
    loading,
  };
};

export default useOverview;
