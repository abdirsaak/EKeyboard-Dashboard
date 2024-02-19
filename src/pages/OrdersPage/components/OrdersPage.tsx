import React from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';

const OrdersPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders Page" />
      <h1>OrdersPage</h1>
    </DefaultLayout>
  );
};

export default OrdersPage;
