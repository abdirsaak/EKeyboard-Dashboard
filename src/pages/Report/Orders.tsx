import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

const Orders: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />
      <h1>orders</h1>
    </DefaultLayout>
  );
};

export default Orders;
