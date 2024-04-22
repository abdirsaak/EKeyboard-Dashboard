import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';
import { getOrders } from '../../../store/order/orderSlice';
import { AppDispatch, RootState } from '../../../store/store';

const OrdersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { orders, isLoading } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />

      <div>
        <form className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 w-full"
          />
          <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90">
            Search
          </button>
        </form>
      </div>
      <div className="relative overflow-x-auto overflow-y-scroll h-[450px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order
              </th>
              <th scope="col" className="px-6 py-3">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                QTY
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? 'Loading'
              : orders?.map((order) => (
                  <tr
                    key={order._id}
                    className="bg-white border-b dark:bg-transparent dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #444
                    </th>
                    <td className="px-6 py-4">
                      <div className="col-span-3 flex items-center">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                          <div className="h-10 w-10 rounded-full">
                            <img
                              src={order.user?.photo}
                              alt="Product"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-sm text-black dark:text-white">
                              {order.user?.username}
                            </p>
                            <p className="text-sm text-black dark:text-white">
                              {order.user?.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* <td className="px-6 py-4">18 Apr 2024 8:56 PM</td> */}
                    <td className="px-6 py-4">{order.createdAt}</td>
                    <td className="px-6 py-4">{order.quantity}</td>
                    <td className="px-6 py-4">$200</td>
                    <td className="px-6 py-4">
                      <span className="bg-red-500 px-3 py-1 rounded-3xl text-white ">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default OrdersPage;
