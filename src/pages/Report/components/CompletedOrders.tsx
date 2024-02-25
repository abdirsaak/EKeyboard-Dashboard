import React from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';

const CompletedOrders: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="CompletedOrders" />
      {/* ..... main table */}
      <div className="main">
         <div className="my-10 flex flex-col md:flex-row md:justify-between">
          
         <button className=' border-[1px]  border-gray-100 w-[150px] md:w-[300px] mt-4 md:px-10 rounded-md h-[40px] md:hidden lg:hidden '>Print</button>
         <input className='border-[1px] border-red-50 w-[200px] md:w-[400px] h-[40px] rounded-md outline-none pl-4 my-2' type="text" placeholder='searc orders'/>

         <button className='border-[1px] hidden md:block lg:block border-gray-100 w-[200px] md:w-[300px] mt-4 md:px-10 rounded-md h-[40px]'>Print</button>
         </div>
       {/* ............ table  */}
       <div className="overflow-x-auto">
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

       {/* table end */}
      </div>
    </DefaultLayout>
  );
};

export default CompletedOrders;
