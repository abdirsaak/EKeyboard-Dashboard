import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import Popupmodel from '../components/Manage/Popupmodel';
import Products from '../components/Manage/Products';



const Manage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Manage" />

      {/* .... pop up model */}
      <Popupmodel />

      {/* ........ table */}
     <div className='mt-2'>
     <Products />
     </div>
    </DefaultLayout>
  );
};

export default Manage;
