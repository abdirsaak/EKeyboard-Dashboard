import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';
import Popupmodel from './Popupmodel';
import Products from './Products';
import { useEffect } from 'react';

const Manage = () => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/signin');
    }
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Manage" />

      {/* .... pop up model */}
      <Popupmodel />

      {/* ........ table */}
      <div className="mt-2">
        <Products />
      </div>
    </DefaultLayout>
  );
};

export default Manage;
