import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';
import Products from './Products';

const Manage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Products" />

      {/* ........ Products table */}
      <div className="mt-2">
        <Products />
      </div>
    </DefaultLayout>
  );
};

export default Manage;
