import { Link } from 'react-router-dom';
import { NewCustomersDT } from '../../types/types';

const ChatCard = ({
  newCustomers,
  loading,
}: {
  newCustomers: any;
  loading: boolean;
}) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Latest customers
      </h4>

      <div>
        {loading ? (
          <span className="px-6">Loading...</span>
        ) : (
          newCustomers?.map((newCustomer: NewCustomersDT, index: number) => (
            <Link
              to="/"
              className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
              key={index}
            >
              <div className="relative h-14 w-14 rounded-full">
                <img src={newCustomer.photo} alt="User" />
                <span
                  className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                  style={{ backgroundColor: 'green' }}
                ></span>
              </div>

              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h5 className="font-medium text-black dark:text-white">
                    {newCustomer.fullName}
                  </h5>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatCard;
