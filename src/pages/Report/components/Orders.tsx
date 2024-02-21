import React from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';

const Orders: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />
      <div className="main">
        <div className="my-10 ">
          <input
            className="border-[1px] border-red-50 w-[400px] h-[40px] rounded-md outline-none pl-4"
            type="text"
            placeholder="searc orders"
          />

         
        </div>
        <table className="">
          <thead>
            <tr className="border-b-[1px] border-gray-50">
              <th className="px-8 font-bold text-black">#</th>
              <th className="px-8 font-bold text-black">Order Name</th>
              <th className="px-8 font-bold text-black">Order price</th>
              <th className="px-8 font-bold text-black">Order QTY</th>
              <th className="px-8 font-bold text-black">order Date</th>
              <th className="px-8 font-bold text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
              <td className="px-8 py-4 bg-red-500  text-white ">Pending</td>
            </tr>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
              <td className="px-8 py-4 bg-red-500  text-white ">Continue</td>
            </tr>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
              <td className="px-8  bg-green-500  text-white ">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default Orders;
