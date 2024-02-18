import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import CompletedOrders from './pages/Report/CompletedOrders';
import Orders from './pages/Report/Orders';
import SignIn from './pages/Authentication/SignIn';
import ECommerce from './pages/Dashboard/ECommerce';
import Manage from './pages/Manage';
import Profile from './pages/Profile';
import OrdersPage from './pages/OrdersPage/OrdersPage';

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
              <ECommerce />
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
          path="/ordersPage"
          element={
            <>
              <PageTitle title="orders" />
              <OrdersPage />
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
              <Orders />
            </>
          }
        />
        <Route
          path="/completedOrders"
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
