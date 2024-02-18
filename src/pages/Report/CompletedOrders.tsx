import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

const CompletedOrders: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="CompletedOrders" />
      <h1>CompletedOrders</h1>
    </DefaultLayout>
  );
};

export default CompletedOrders;
