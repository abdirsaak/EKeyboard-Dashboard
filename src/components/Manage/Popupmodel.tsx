import React, { useState } from 'react';

function Popupmodel() {
  const [showModel, setShowModel] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null,
  );

  const toggleModel = () => {
    setShowModel(!showModel);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <button
        className="bg-slate-700 text-white px-10 py-2 rounded-md"
        onClick={toggleModel}
      >
        Add Product
      </button>

      {showModel && (
        <div className="all  ">

      
        <div className=" overlay bg-slate-900 rounded-md   absolute w-auto h-[95vh] mt-4 ">
          <div className="flex justify-end m-4">
            <button className="font-bold text-white" onClick={toggleModel}>
              X
            </button>
          </div>
          <div className="flex flex-col flex-wrap  items-center">
            <div className=" m-6  ">
              <div className="flex gap-x-9 gap-y-4 flex-wrap">
                {/* ...... produc name */}
                <div className="flex flex-col">
                  <label htmlFor="productName">Product Name:</label>
                  <input
                    className="w-[240px] px-6 py-2 rounded-md outline-none mt-2 "
                    type="text"
                    id="productName"
                  />
                </div>
                {/* ....... product price */}
                <div className="flex flex-col">
                  <label htmlFor="productName">Product price:</label>
                  <input
                    className="px-6 py-2 rounded-md outline-none mt-2"
                    type="text"
                    id="productName"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mt-10 gap-x-10">
                {/* ...... product description */}
                <div className="flex flex-col">
                  <label htmlFor="productDescription">
                    Product Description:
                  </label>
                  <textarea
                    className="w-[240px] h-[100px] rounded-md outline-none mt-2"
                    id="productDescription"
                  ></textarea>
                </div>

                {/* ........ product image */}
                <div className="flex flex-col">
                  <input
                    type="file"
                    id="productImage"
                    onChange={handleUpload}
                  />
                  {/* .......... image priview */}
                  {previewImage && typeof previewImage === 'string' && (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-30 h-30 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mt-6"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-x-10 mt-10">
                {/* ....... product star */}
                <div className="flex flex-col">
                  <label htmlFor="productName">Star</label>
                  <input
                    className="w-[240px] py-2 rounded-md outline-none mt-2"
                    type="text"
                    id="productName"
                  />
                </div>
                {/* ....... product stoc */}
                <div className="flex flex-col">
                  <label htmlFor="productName">stock</label>
                  <input
                    className="py-2 rounded-md outline-none mt-2"
                    type="text"
                    id="productName"
                  />
                </div>
              </div>

              <div className="mt-10">
                <button className="inline-flex items-center justify-center rounded-md bg-meta-3 py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                  Add product
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default Popupmodel;
