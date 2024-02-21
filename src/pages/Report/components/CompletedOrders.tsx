import React from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';

const CompletedOrders: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="CompletedOrders" />
      {/* ..... main table */}
      <div className="main">
         <div className="my-10 flex justify-between">
         <input className='border-[1px] border-red-50 w-[400px] h-[40px] rounded-md outline-none pl-4' type="text" placeholder='searc orders'/>

         <button className='border-[1px] border-gray-100 px-10 rounded-md'>Print</button>
         </div>
        <table className=''>
          <thead>
            <tr className='border-b-[1px] border-gray-50'>
              <th className="px-8 font-bold text-black">#</th>
              <th className="px-8 font-bold text-black">Order Name</th>
              <th className="px-8 font-bold text-black">Order price</th>
              <th className="px-8 font-bold text-black">Order QTY</th>
              <th className="px-8 font-bold text-black">order Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
            </tr>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
            </tr>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default CompletedOrders;
