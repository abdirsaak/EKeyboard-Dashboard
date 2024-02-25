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
            className="border-[1px] border-red-50 w-[200px] md:w-[400px] h-[40px] rounded-md outline-none pl-4"
            type="text"
            placeholder="searc orders"
          />
        </div>

       {/* ......... table */}
       <div className="overflow-x-auto w-full">
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
              <td className="px-8 py-4 ">
                <span className="bg-yellow-500  text-white px-[20px] py-[10px] rounded-md">Pending</span>
              </td>
            </tr>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
              <td className="px-8 py-4  "><span className="bg-red-500  text-white px-[20px] py-[10px] rounded-md">Continue</span></td>
            </tr>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
              <td className="px-8   ">
              <span className="bg-yellow-500  text-white px-[20px] py-[10px] rounded-md">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
       </div>

       {/* ...end table */}
      </div>
    </DefaultLayout>
  );
};

export default Orders;
