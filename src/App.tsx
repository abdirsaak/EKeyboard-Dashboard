import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import CompletedOrders from './pages/Report/components/CompletedOrders';
import Orders from './pages/Report/components/Orders';
import SignIn from './pages/Authentication/components/SignIn';
import Manage from './pages/manageProducts/components/Manage';
import Profile from './pages/Profie/components/Profile';
import OrdersPage from './pages/OrdersPage/components/OrdersPage';
import Dashbooard from './pages/Dashboard/components/Dashbooard';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard" />
              <Dashbooard />
            </>
          }
        />
        <Route
          path="/manage"
          element={
            <>
              <PageTitle title="Manage" />
              <Manage />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <PageTitle title="Orders" />
              <OrdersPage />
            </>
          }
        />
        {/* reports */}
        <Route
          path="report/re-order"
          element={
            <>
              <PageTitle title="Orders" />
              <Orders />
            </>
          }
        />
        <Route
          path="report/completedOrders"
          element={
            <>
              <PageTitle title="Completed orders" />
              <CompletedOrders />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
