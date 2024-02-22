import React from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';

const OrdersPage: React.FC = () => {
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
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Order name
              </th>
              <th scope="col" className="px-6 py-3">
                Order qty
              </th>
              <th scope="col" className="px-6 py-3">
                Total price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <span className="bg-red-500 px-3 py-1 rounded-3xl text-white ">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b dark:dark:bg-transparent  dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">
                <span className="bg-green-500 px-3 py-1 rounded-3xl text-white ">
                  Success
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default OrdersPage;
