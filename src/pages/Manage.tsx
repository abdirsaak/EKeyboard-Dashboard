import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const Manage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Manage" />

      {/* <!-- ====== Manage Section Start ====== --> */}
      <h3>Manage</h3>
      {/* <!-- ====== Manage Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Manage;
