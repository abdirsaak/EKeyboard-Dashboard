import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';
import Popupmodel from './Popupmodel';
import Products from './Products';

const Manage = () => {
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
